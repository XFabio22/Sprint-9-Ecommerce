import { CartService } from './../home/services/cart.service';
import { productoAnadido } from './../admin/interfaces/products.interfaces';
import { productsService } from './../admin/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor( private CartService:CartService) { }

  // productos:productoAnadido[]=[]
  ngOnInit(): void {  
    this.CartService.getListFromLocalStorage('lista')
    this.CartService.calculateTotal()
    
  }

  remove(name:string){
    this.CartService.removeFromCart(name)
   
  }
  get totalPrice(){
    return this.CartService.totalAPagar
  }
  get productos() {
    return this.CartService.cartList;
  }

}
