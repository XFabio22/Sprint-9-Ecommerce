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
  AddEditForm!: FormGroup;
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
  this._id = this.activatedRoute.snapshot.params['_id'];
  this.isAddMode = !this._id;
    this.AddEditForm=this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    img:['',Validators.required],
    price:[,[Validators.required,Validators.minLength(1)]],
    discount:[],
    descripcion:['',[Validators.required,Validators.minLength(10)]],
    category:['',[Validators.required]]
  })

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

  get f(){
    return this.AddEditForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.AddEditForm.reset();
  }

onSubmit(){
  this.submitted = true;
  if(this.AddEditForm.invalid){
    return
  }
  this.loading= true;
  if(this.isAddMode){
    this.addProduct();
  }else{
    this.editProducto(this.producto._id)
  }
}

  addProduct(){
    const{name,img,price,discount,descripcion,category} = this.AddEditForm.value
    // this.submitted = true
    if(this.AddEditForm.invalid){
      // Swal.fire('Error','rellene todos los campos','error')
      return  
    }
    else if(this.AddEditForm.valid){
    
      this.productsService.addProducts(name,img,price,discount,descripcion,category)
      .subscribe(ok =>{
        console.log(ok);
        
        if(ok){
          Swal.fire('Saved!', 'El prodcuto se añadio correctamente', 'success')
        
        }else if(!ok){
          Swal.fire('Error', `Puede que este nombre ya lo tenga otro producto ` ,'error');
        }
        
      })
      this.AddEditForm.reset({name:'',img:'',price:0,discount:0,descripcion:'',category:''})
    }
    
  }

editProducto(_id:string) {
  // //pon alertas antes de hacer todo
  // this.submitted = true
  const{name,img,price,discount,descripcion,category} = this.AddEditForm.value
  if(this.AddEditForm.invalid){
    Swal.fire('Error','rellene todos los campos','error')
    return  this.AddEditForm.markAllAsTouched()
  }else if (this.AddEditForm.valid){
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
    console.log(this.AddEditForm);
  }

}



