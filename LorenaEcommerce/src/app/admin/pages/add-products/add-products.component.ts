import { productsService } from './../../services/products.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  // newCategory:FormControl =this.fb.control('',Validators.required)


  // get CategoryArr(){ //con form reactivos esta es mejor forma de tomar lo valores y sin errores , as FormArray: esto se le dice parar ayudar a ts y quitar el error 
  //   return this.addProductsForm.get('category') as FormArray;
  // }
  // // siElCampoNoesValido(obj:string){
  // //   return this.addProductsForm.controls[obj].invalid && this.addProductsForm.controls[obj].touched
  // // }
  


  // agregarFavorito(){
  //   if(this.newCategory.invalid){return};

  //   this.CategoryArr.push(this.fb.control(
  //     this.newCategory.value,Validators.required
  //   ));

  //   this.newCategory.reset();
  // }


  // borrar(index:number){
  //   this.CategoryArr.removeAt(index)//el FormArray solo admite el  removeAt y no el splice 
  // }



  addProduct(){
    const{name,img,price,discount,descripcion,category} = this.addProductsForm.value
    if(this.addProductsForm.invalid){
      console.log('error');
      return  this.addProductsForm.markAllAsTouched();
      
      
    }
    else if(this.addProductsForm.valid){
    
      this.productsService.addProducts(name,img,price,discount,descripcion,category)
      .subscribe(ok =>{
        if(ok){
          console.log('El producto se anadio correctamente');
          
        }
      })
      this.addProductsForm.reset({name:'',img:'',price:0,discount:0,descripcion:'',category:''})
      console.log(this.addProductsForm);
    }
    
  }
}
