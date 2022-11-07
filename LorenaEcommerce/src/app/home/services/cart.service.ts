import { productoAnadido } from './../../admin/interfaces/products.interfaces';
import { Injectable } from '@angular/core';
import { DBProduct } from 'src/app/admin/interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total: number = 0;
  cartList:productoAnadido[]=[]
  constructor() { }
}
