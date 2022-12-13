import { CartService } from './../../services/cart.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productsService } from './../../../admin/services/products.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs';
import { DBProduct } from 'src/app/admin/interfaces/products.interfaces';
import { NgbDatepicker, NgbDateStruct, NgbInputDatepickerConfig , } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/admin/interfaces/pedidos.interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.scss'],
  providers: [NgbInputDatepickerConfig],
})
export class BuyFormComponent implements OnInit {
  
  @ViewChild('NgbdDatepicker') d!: NgbDateStruct;


  model!: NgbDateStruct;

  constructor(
    private productsService:productsService ,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder,
    private CartService:CartService
  ) { }

  item! : DBProduct 
  submitted = false;
  
  buyForm:FormGroup =this.fb.group({
    nameCumpleanero:['',[Validators.required, Validators.minLength(3)]],
    sabores:['',[Validators.required]],
    zise:['',Validators.required],
    horaDeRecogida:['',[Validators.required]],
    cantidad:[0,[Validators.required , Validators.pattern(/^[1-9]\d*$/),Validators.min(1)]],
    Observaciones: ['']
  })


  numCantidad :number = 0

  sumar(campo:string){
    if( campo === "cantidad"){
      this.numCantidad ++
    }
    
  }

  restar(valor:number,campo:string){
    if( valor > 0 && campo === "cantidad" ){
      this.numCantidad --;     
    }
  }

  total:number = 0
  productos:DBProduct[]=[]
  ngOnInit(): void {
    // switchMap Recibe un observable y regresa otro observable
    this.activatedRoute.params
    .pipe( //pipe sirve para declarar cualquier cantidad de operadores que trabajaran con el producto de este Observable
    switchMap(({_id} ) =>
    this.productsService.getDetailProducts(_id))
      )
    .subscribe( res =>  this.item =  res );
  }


  get f(){
    return this.buyForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.buyForm.reset();
  }


  get nameMsgErr():string {
    const errors = this.buyForm.get('nameCumpleanero')?.errors;
 
    if(errors?.['required']){
      return 'Porfavor introdusca un nombre'
    } else if (errors?.['minlength']) {
      return 'El minimo de letra es 3';
    } 

    return ''; 
  }
  get saboresMsgErr():string {
    const errors = this.buyForm.get('sabores')?.errors;

    if(errors?.['required']){
      return 'Porfavor elije entre los sabores disponibles'
    } 
    return '';
  }
    
  get ziseMsgErr():string {
    const errors = this.buyForm.get('zise')?.errors;

    if(errors?.['required']){
      return 'Porfavor introdusca el tamaño de el pastel '
    } 
    return '';
    
    }

      get horaDeRecogidaMsgErr():string {
        const errors = this.buyForm.get('horaDeRecogida')?.errors;
    
        if(errors?.['required']){
          return 'Porfavor introdusca la hora de recogidad de el pedido'
        }
        return '';
        
        }
    get cantidadMsgErr():string {
    const errors = this.buyForm.get('cantidad')?.errors;  
      if(errors?.['required']){
      return 'Porfavor introdusca una cantidad mayor o igaul a 1'
        } else if (errors?.['min']) {
          return 'La cantidad debe ser 1 como minimo para realizar el pedido';
        } 
        return '';
    }
  
    siElCampoNoesValido(obj:string){
      return this.buyForm.controls[obj].invalid && this.buyForm.controls[obj].touched
    }
  fecha!:string
  get addCartList() {
    return this.CartService.cartList;
  }

  
  addCart(){
  
    
    if(this.buyForm.invalid ){ 
      Swal.fire('error!', 'El formulario es invalido rellene todos los campos ', 'error') 
      this.buyForm.markAllAsTouched()
      return   
    } 
    else if(this.model == null || undefined){
      Swal.fire('error!', 'Introduce una fecha de recogida', 'error')
      return  
    }
    //añadir validaciones de años dias y meses  y meter validacion visual de la fecha
    else if (this.buyForm.valid && this.model.day > 1 && this.model.month > 1  && this.model.year >= 2022 ){
      
      const {nameCumpleanero,sabores,zise,horaDeRecogida,cantidad, Observaciones} = this.buyForm.value
      const {name,img,price,discount,descripcion,category} = this.item
      const total = this.total += this.item.price * cantidad;
      const  {year,month,day} = this.model
      console.log(this.total);
      const productoAnadido:Pedido ={ 
        
        nameCumpleanero,
        sabores,
        zise,
        horaDeRecogida,
        cantidad,
        Observaciones,
        name,
        img,
        price,
        total ,
        descripcion,
        year,
        month,
        day
      }
      this.addCartList.push(productoAnadido)
      this.CartService.guardarEnLocal(this.addCartList)
      this.CartService.calculateTotal(total)
      this.buyForm.reset({tematica:'',nameCumpleanero:'',sabores:'',zise:'',fechaDeRecogida:'',horaDeRecogida:'',cantidad:0})
      this.router.navigate(['/cart'])
    }

  


  }

}
