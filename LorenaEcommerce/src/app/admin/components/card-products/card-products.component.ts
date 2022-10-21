import { Component, Input, OnInit } from '@angular/core';
import { DBProduct } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input ()prodcuto! : DBProduct 
}
