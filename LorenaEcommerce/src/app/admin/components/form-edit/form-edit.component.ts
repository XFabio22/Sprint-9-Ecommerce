import { productsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DBProduct } from '../../interfaces/products.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private productsService:productsService ,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  producto! : DBProduct 

ngOnInit(): void {
     // switchMap Recibe un observable y regresa otro observable
      this.activatedRoute.params
     .pipe( //pipe sirve para declarar cualquier cantidad de operadores que trabajaran con el producto de este Observable
      switchMap(({_id} ) =>
    this.productsService.getDetailProducts(_id))
      )
    .subscribe( res =>  this.producto =  res );
    
} 


  EditForm:FormGroup =this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    img:['',Validators.required],
    price:[,[Validators.required,Validators.minLength(1)]],
    discount:[],
    descripcion:['',[Validators.required,Validators.minLength(10)]],
    category:['',[Validators.required]]
  })

editProducto(_id:string) {
  //pon alertas antes de hacer todo
  const{name,img,price,discount,descripcion,category} = this.EditForm.value
  if(this.EditForm.invalid){
      Swal.fire('Error','Rellena todos los campos','error')
  }else if (this.EditForm.valid){
    this.productsService.edittProducts(_id,name,img,price,discount,descripcion,category)
    .subscribe(res =>{
      if(res.ok){
        Swal.fire('Saved!', res.mgs, 'success')
        this.router.navigate(['admin/list'])
      }else{
        Swal.fire('Error',res.mgs,'error');
      }
    }) 
  }
      // this.addProductsForm.reset({name:'',img:'',price:0,discount:0,descripcion:'',category:''})
      console.log(this.EditForm);
    


  }

}



