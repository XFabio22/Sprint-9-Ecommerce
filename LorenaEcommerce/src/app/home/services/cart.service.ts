import { productoAnadido } from './../../admin/interfaces/products.interfaces';
import { Injectable } from '@angular/core';
import { DBProduct } from 'src/app/admin/interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalAPagar: number = 0;
  cartList:productoAnadido[]=[]
  

  constructor() { }


  calculateTotal() {
    for(let i = 0; i < this.cartList.length; i++ ){
        this.totalAPagar += this.cartList[i].price * this.cartList[i].cantidad; 
    }
}

removeFromCart(name:string) {
  const index = this.cartList.findIndex(cart => cart.name == name);

  this.cartList[index].cantidad --
  const menos =   this.cartList[index].price
  this.totalAPagar -= menos
  this.guardarEnLocal(this.cartList)
  if(this.cartList[index].cantidad === 0){
    this.cartList.splice(index,1)
    this.guardarEnLocal(this.cartList)
  }
  
}



guardarEnLocal(lista:productoAnadido[]){
    localStorage.setItem('lista', JSON.stringify(lista))

}
getListFromLocalStorage(item: string) {
  if (!localStorage.getItem(item)) {
  return;
  }
  this.cartList = JSON.parse(localStorage.getItem(item)!)||[];
}
}
