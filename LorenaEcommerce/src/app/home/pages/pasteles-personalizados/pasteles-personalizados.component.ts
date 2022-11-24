import { productsService } from './../../../admin/services/products.service';
import { Component, OnInit } from '@angular/core';
import { DBProduct, ProductsResponse } from 'src/app/admin/interfaces/products.interfaces';

@Component({
  selector: 'app-pasteles-personalizados',
  templateUrl: './pasteles-personalizados.component.html',
  styleUrls: ['./pasteles-personalizados.component.scss']
})
export class PastelesPersonalizadosComponent implements OnInit {

  constructor( private productsService:productsService) { }
  category:string = 'Personalizados'
  productos:DBProduct[]=[]
  ngOnInit(): void {
    // this.productsService.getListProdcutsCategory(this.category)
    // .subscribe((res:ProductsResponse)=>{
    //   this.productos.push(...res.dbProduct);
    //   console.log(this.productos);
      
    // });
  }

}
