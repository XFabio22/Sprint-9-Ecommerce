import { CartService } from './../../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productsService } from './../../../admin/services/products.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs';
import { DBProduct, productoAnadido, ProductsResponse } from 'src/app/admin/interfaces/products.interfaces';
import { NgbDatepicker, NgbDateStruct, NgbInputDatepickerConfig , } from '@ng-bootstrap/ng-bootstrap';


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
  buyForm:FormGroup =this.fb.group({
    tematica:[''],
    nameCumpleanero:['',Validators.required],
    sabores:['',[Validators.required,Validators.minLength(1)]],
    zise:['',Validators.required],
    fechaDeRecogida:['',[Validators.required]],
    horaDeRecogida:['',[Validators.required]],
    cantidad:[0,[Validators.required , Validators.pattern(/^[1-9]\d*$/)]]
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



  addCart(){
    const {tematica,nameCumpleanero,sabores,zise,fechaDeRecogida,horaDeRecogida,cantidad} = this.buyForm.value
    const {name,img,price,discount,descripcion,category} = this.item
    const total = this.total += this.item.price * cantidad;
    console.log(this.total);
    
    const productoAnadido:productoAnadido ={ 
      tematica,
      nameCumpleanero,
      sabores,
      zise,
      fechaDeRecogida,
      horaDeRecogida,
      cantidad,
      name,
      img,
      price,
      total ,
      descripcion
    }


    this.CartService.cartList.push(productoAnadido)
    console.log(this.CartService.cartList)
    

  }

}
