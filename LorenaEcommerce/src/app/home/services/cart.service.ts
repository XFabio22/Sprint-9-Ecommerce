import { productoAnadido } from './../../admin/interfaces/products.interfaces';
import { Injectable } from '@angular/core';
import { DBProduct } from 'src/app/admin/interfaces/products.interfaces';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Base_UrL = environment.BaseUrL

  totalAPagar: number = 0;
  cartList:productoAnadido[]=[]
  

  constructor(private http:HttpClient) { }
  

 

addPedidos():Observable<productoAnadido>{

  const pedidos = this.cartList.map((valore) => valore); 

  console.log(pedidos);
    const url = `${this.Base_UrL}/pedidos/newPedido`
    const body = {pedidos}

    return this.http.post<productoAnadido>(url,body)
}

calculateTotal(suma:number) {

        this.totalAPagar += suma
        this.guardarEnLocalPrecio(this.totalAPagar)
    
}

removeFromCart(name:string) {
  const index = this.cartList.findIndex(cart => cart.nameCumpleanero== name);

  this.cartList[index].cantidad --
  const menos =   this.cartList[index].price
  this.totalAPagar -= menos
  this.guardarEnLocalPrecio(this.totalAPagar)
  this.guardarEnLocal(this.cartList)
  if(this.cartList[index].cantidad === 0 ){
    this.cartList.splice(index,1)
    this.guardarEnLocal(this.cartList)
    if(this.cartList.length === 0){
      this.totalAPagar = 0 
      this.guardarEnLocalPrecio(this.totalAPagar)
    }
    
  }
  
}

guardarEnLocalPrecio(precio:number){
  localStorage.setItem('precio', JSON.stringify(precio))

}

getListFromLocalStoragePrecio(item: string) {
  if (!localStorage.getItem(item)) {
  return;
  }
  this.totalAPagar = JSON.parse(localStorage.getItem(item)!)||[];
  
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
