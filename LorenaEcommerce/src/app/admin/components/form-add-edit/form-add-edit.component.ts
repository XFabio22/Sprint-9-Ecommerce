import { productsService } from '../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DBProduct } from '../../interfaces/products.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-add-edit.component.html',
  styleUrls: ['./form-add-edit.component.scss']
})
export class FormAddEditComponent implements OnInit {
 
  _id!: string;
  isAddMode!: boolean;
  loading = false;

  constructor(private fb:FormBuilder,
    private productsService:productsService ,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  producto! : DBProduct 

ngOnInit(): void {
  this._id = this.activatedRoute.snapshot.params['_id']; //DETECTA SI HAY UN ID EN EL URL y CAMBIA EL MODO MEDIANTE TRUE FALSE

  this.isAddMode = !this._id;
  this.producto = {
    name:'',
    img:'',
    price:0,
    discount:0,
    descripcion:'',
    category:''
  }
  if(!this.isAddMode){
     // switchMap Recibe un observable y regresa otro observable
    this.activatedRoute.params
     .pipe( //pipe sirve para declarar cualquier cantidad de operadores que trabajaran con el producto de este Observable
      switchMap(({_id} ) =>
    this.productsService.getDetailProducts(_id))
      )
    .subscribe( res =>  this.producto =  res );
  }
} 

submitted = false;

//con formulario solo se necesitaria un get pereo como es un objeeto no 
  get name(){
    return Object.entries(this.producto.name).length >= 3
  }

  get img(){
    return Object.entries(this.producto.img).length == 0
  }
  get price(){
    return Object.entries(this.producto.price).length >= 1
  }
  get descripcion(){
    return Object.entries(this.producto.descripcion).length >= 10
  }

  get category(){
    return Object.entries(this.producto.category).length === 0
  }
  onReset() {
    this.submitted = false;
    this.producto.name
  }

onSubmit(){
  this.submitted = true;
  this.loading= true;
  if(this.isAddMode){
    this.addProduct();
  }else{
    this.editProducto(this.producto._id!)
  }
}

  addProduct(){
    const{name,img,price,discount,descripcion,category} = this.producto
  
    if( !this.name && !this.price && this.category && this.img &&!this.descripcion){
       Swal.fire('Error','rellene todos los campos','error')
      return  
    }
    else if (this.name && this.price && !this.category && !this.img && this.descripcion){
    
      this.productsService.addProducts(name,img,price,discount!,descripcion,category)
      .subscribe(ok =>{
        console.log(ok);
        
        if(ok){
          Swal.fire('Saved!', 'El prodcuto se añadio correctamente', 'success')
          this.router.navigate(['admin/list'])
        
        }else if(!ok){
          Swal.fire('Error', `Puede que este nombre ya lo tenga otro producto ` ,'error');
        }
        
      })
       this.producto.name =''
       this.producto.img =''
       this.producto.price =0
       this.producto.discount =0
       this.producto.descripcion =''
       this.producto.category =''
    }
    
  }

editProducto(_id:string) {

  const{name,img,price,discount,descripcion,category} = this.producto
  if(this.producto.name.trim().length == 0){
    Swal.fire('Error','rellene todos los campos','error')
    return 
  }else if (this.producto){
    this.productsService.edittProducts(_id,name,img,price,discount!,descripcion,category)
    .subscribe(res =>{
      if(res.ok){
        Swal.fire('Saved!', res.mgs, 'success')
        this.router.navigate(['admin/list'])
      }else{
        Swal.fire('Error',res.mgs,'error');
      }
    }) 
  }

    console.log(this.producto);
  }

}



