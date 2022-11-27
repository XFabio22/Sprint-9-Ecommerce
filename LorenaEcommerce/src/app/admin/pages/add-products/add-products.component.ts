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
  // submitted = false;
  // addProductsForm:FormGroup =this.fb.group({
  //   name:['',[Validators.required, Validators.minLength(3)]],
  //   img:['',Validators.required],
  //   price:[0,[Validators.required,Validators.min(1)]],
  //   discount:[0],
  //   descripcion:['',[Validators.required,Validators.minLength(10)]],
  //   category:['',Validators.required]
  // })  

  // get f(){
  //   return this.addProductsForm.controls;
  // }

  // onReset() {
  //   this.submitted = false;
  //   this.addProductsForm.reset();
  // }

  // addProduct(){
  //   const{name,img,price,discount,descripcion,category} = this.addProductsForm.value
  //   this.submitted = true
  //   if(this.addProductsForm.invalid){
  //     // Swal.fire('Error','rellene todos los campos','error')
  //     return  
  //   }
  //   else if(this.addProductsForm.valid){
    
  //     this.productsService.addProducts(name,img,price,discount,descripcion,category)
  //     .subscribe(ok =>{
  //       console.log(ok);
        
  //       if(ok){
  //         Swal.fire('Saved!', 'El prodcuto se añadio correctamente', 'success')
        
  //       }else if(!ok){
  //         Swal.fire('Error', `Puede que este nombre ya lo tenga otro producto ` ,'error');
  //       }
        
  //     })
  //     this.addProductsForm.reset({name:'',img:'',price:0,discount:0,descripcion:'',category:''})
  //   }
    
  // }
}
