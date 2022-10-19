
import { Component, OnInit } from '@angular/core';
import { DBProduct, ProductsResponse } from '../../interfaces/products.interfaces';
import { productsService } from '../../services/products.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private productsService:productsService) { }
  
  productos:DBProduct[]=[]
  ngOnInit(): void {
    this.productsService.getListProdcuts()
    .subscribe(res =>{
      this.productos = res
      console.log(res);
      
    });
    console.log(this.productos);
    
  }
}
