import { productsService } from './../../services/products.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent  {
  
  constructor(private fb:FormBuilder,private productsService:productsService) { }
  
  addProductsForm:FormGroup =this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    img:['',Validators.required],
    price:[,[Validators.required,Validators.minLength(1)]],
    discount:[],
    descripcion:['',[Validators.required,Validators.minLength(10)]],
    category:['',Validators.required]
  })  

  addProduct(){
    const{name,img,price,discount,descripcion,category} = this.addProductsForm.value
    if(this.addProductsForm.invalid){
      console.log('error');
      return  this.addProductsForm.markAllAsTouched();
    }
    else if(this.addProductsForm.valid){
    
      this.productsService.addProducts(name,img,price,discount,descripcion,category)
      .subscribe(ok =>{
        
      })
      this.addProductsForm.reset({name:'',img:'',price:0,discount:0,descripcion:'',category:''})
      console.log(this.addProductsForm);
    }
    
  }
}
