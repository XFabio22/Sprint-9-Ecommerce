import { Component, OnInit } from '@angular/core';
import { DBProduct, ProductsResponse } from 'src/app/admin/interfaces/products.interfaces';
import { productsService } from 'src/app/admin/services/products.service';

@Component({
  selector: 'app-pasteles-formales',
  templateUrl: './pasteles-formales.component.html',
  styleUrls: ['./pasteles-formales.component.scss']
})
export class PastelesFormalesComponent implements OnInit {

  constructor(private productsService:productsService) { }
  category:string = 'Formales'
  productos:DBProduct[]=[]
  ngOnInit(): void {
    this.productsService.getListProdcutsCategory(this.category)
    .subscribe((res:ProductsResponse)=>{
      this.productos.push(...res.dbProduct);
      console.log(this.productos);
      
    });
  }

}
