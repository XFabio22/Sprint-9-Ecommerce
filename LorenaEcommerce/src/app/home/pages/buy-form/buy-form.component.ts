import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { productsService } from './../../../admin/services/products.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs';
import { DBProduct } from 'src/app/admin/interfaces/products.interfaces';
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
    private fb:FormBuilder
  ) { }
  item! : DBProduct 



  buyForm:FormGroup =this.fb.group({
    tematica:[''],
    nameCumpleanero:['',Validators.required],
    sabores:['',[Validators.required,Validators.minLength(1)]],
    zise:[''],
    fechaDeRecogida:['',[Validators.required,Validators.minLength(10)]],
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

  ngOnInit(): void {
    // switchMap Recibe un observable y regresa otro observable
    this.activatedRoute.params
    .pipe( //pipe sirve para declarar cualquier cantidad de operadores que trabajaran con el producto de este Observable
    switchMap(({_id} ) =>
    this.productsService.getDetailProducts(_id))
      )
    .subscribe( res =>  this.item =  res );
  }

}
