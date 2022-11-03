import { productsService } from './../../../admin/services/products.service';
import { Component, OnInit } from '@angular/core';
import { DBProduct, ProductsResponse } from 'src/app/admin/interfaces/products.interfaces';

@Component({
  selector: 'app-menu-yprecios',
  templateUrl: './menu-yprecios.component.html',
  styleUrls: ['./menu-yprecios.component.scss']
})
export class MenuYPreciosComponent implements OnInit {

  constructor(private productsService:productsService) { }
  productos:DBProduct[]=[]
  ngOnInit(): void {
    this.productsService.getListProdcuts()
    .subscribe((res:ProductsResponse)=>{
      this.productos.push(...res.dbProduct);
    });
  }

}
