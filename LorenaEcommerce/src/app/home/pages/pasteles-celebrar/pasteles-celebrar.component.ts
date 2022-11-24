import { Component, OnInit } from '@angular/core';
import { DBProduct, ProductsResponse } from 'src/app/admin/interfaces/products.interfaces';
import { productsService } from 'src/app/admin/services/products.service';
@Component({
  selector: 'app-pasteles-celebrar',
  templateUrl: './pasteles-celebrar.component.html',
  styleUrls: ['./pasteles-celebrar.component.scss']
})
export class PastelesCelebrarComponent implements OnInit {

  constructor(private productsService:productsService) { }
  category:string = 'Celebrar'
  productos:DBProduct[]=[]
  ngOnInit(): void {
    // this.productsService.getListProdcutsCategory(this.category)
    // .subscribe((res:ProductsResponse)=>{
    //   this.productos.push(...res.dbProduct);
    //   console.log(this.productos);
      
    // });
  }

}
