import { productsService } from './../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent  {
  
  constructor(private fb:FormBuilder,private productsService:productsService) { }
  submitted = false;
  addProductsForm:FormGroup =this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    img:['',Validators.required],
    price:[0,[Validators.required,Validators.min(1)]],
    discount:[0],
    descripcion:['',[Validators.required,Validators.minLength(10)]],
    category:['',Validators.required]
  })  

  get f(){
    return this.addProductsForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.addProductsForm.reset();
  }
  // siElCampoNoesValido(obj:string){
  //   if(this.addProductsForm.controls[obj].invalid){
  //     return true
  //   } else{
  //     return false
  //   }
  // }
  // get nameMsgErr():string {
  //   const errors = this.addProductsForm.get('name')?.errors;
 
  //   if(errors?.['required']){
  //     return 'Porfavor introdusca el nombre de el producto'
  //   } else if (errors?.['minlength']) {
  //     return 'El minimo de letra es 3';
  //   } 
  //   return ''; 
  // }
  // get imgMsgErr():string {
  //   const errors = this.addProductsForm.get('img')?.errors;

  //   if(errors?.['required']){
  //     return 'Porfavor introdusca el nombre de la img'
  //   } 
  //   return '';
  // }
    
  // get priceMsgErr():string {
  //   const errors = this.addProductsForm.get('price')?.errors;

  //   if(errors?.['required']){
  //     return 'Introduce un precio'
  //   } else if (errors?.['min']) {
  //     return 'El precio debe tener 1 digito como minimo';
  //   } 
  //   return '';
    
  //   }
  
   
  //   get descripcionMsgErr():string {
  //     const errors = this.addProductsForm.get('descripcion')?.errors;
   
  //     if(errors?.['required']){
  //       return 'Introduce la descripcion de el producto'
  //     } else if (errors?.['minlength']) {
  //       return 'La descripcion debe tener mas de 10 caracteres';
  //     } 
  
  //     return ''; 
  //   }

  
  //   get categoryMsgErr():string {
  //     const errors = this.addProductsForm.get('category')?.errors;
   
  //     if(errors?.['required']){
  //       return 'Elige la categoria de el producto'
  //     } 
  
  //     return ''; 
  //   }
  addProduct(){
    const{name,img,price,discount,descripcion,category} = this.addProductsForm.value
    this.submitted = true
    if(this.addProductsForm.invalid){
      Swal.fire('Error','rellene todos los campos','error')
      return  this.addProductsForm.markAllAsTouched()
    }
    else if(this.addProductsForm.valid){
    
      this.productsService.addProducts(name,img,price,discount,descripcion,category)
      .subscribe(ok =>{
        console.log(ok);
        
        if(ok.ok  === true){
          Swal.fire('Saved!', 'El prodcuto se añadio correctamente', 'success')
        
        }else{
          Swal.fire('Error', `Puede que este nombre ya lo tenga otro producto ` ,'error');
        }
        
      })
      this.addProductsForm.reset({name:'',img:'',price:0,discount:0,descripcion:'',category:''})
    }
    
  }
}
