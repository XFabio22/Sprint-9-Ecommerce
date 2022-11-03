import { productsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DBProduct } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {

  constructor(private fb:FormBuilder,private productsService:productsService) { }

@Input ()producto! : DBProduct 

ngOnInit(): void {
  console.log(this.producto);
  
} 


  EditForm:FormGroup =this.fb.group({
    name:[``,[Validators.required, Validators.minLength(3)]],
    img:['',Validators.required],
    price:[,[Validators.required,Validators.minLength(1)]],
    discount:[],
    descripcion:['',[Validators.required,Validators.minLength(10)]],
    category:this.fb.array([

    ],Validators.required)
  })

  newCategory:FormControl =this.fb.control('',Validators.required)


  get CategoryArr(){ //con form reactivos esta es mejor forma de tomar lo valores y sin errores , as FormArray: esto se le dice parar ayudar a ts y quitar el error 
    return this.EditForm.get('category') as FormArray;
  }

  // siElCampoNoesValido(obj:string){
  //   return this.addProductsForm.controls[obj].invalid && this.addProductsForm.controls[obj].touched
  // }
  


  agregarFavorito(){
    if(this.newCategory.invalid){return};

    this.CategoryArr.push(this.fb.control(
      this.newCategory.value,Validators.required
    ));

    this.newCategory.reset();
  }


  borrar(index:number){
    this.CategoryArr.removeAt(index)//el FormArray solo admite el  removeAt y no el splice 
  }
editProducto(_id:string ){
  const{name,img,price,discount,descripcion,category} = this.EditForm.value

      this.productsService.edittProducts(_id,name,img,price,discount,descripcion,category)
      .subscribe(message =>{
        
          console.log(message);
          
        
      })
      // this.addProductsForm.reset({name:'',img:'',price:0,discount:0,descripcion:'',category:''})
      console.log(this.EditForm);
    


  }

}
