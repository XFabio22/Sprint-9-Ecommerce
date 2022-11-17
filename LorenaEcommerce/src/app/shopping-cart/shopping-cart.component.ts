import { authService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from './../home/services/cart.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor( private CartService:CartService ,  private router:Router, private authService:authService) { 
    
  }

  // productos:productoAnadido[]=[]
  ngOnInit(): void {  
    this.CartService.getListFromLocalStorage('lista')
    this.CartService.getListFromLocalStoragePrecio('precio')
    if(  this.CartService.cartList.length === 0 ){
      this.CartService.totalAPagar = 0;
      localStorage.removeItem('precio')
    }
    
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
  get authUser(){
    return this.authService.AuthUser
  }
  shop(){


    if(!localStorage.getItem('token') || localStorage.length == 0 ){
      Swal.fire('Registrate','Debes estar registrado para realizar el pedido', 'error')
      return 
    }
     else if(this.CartService.cartList.length === 0 ){
      Swal.fire('No hay productos','El carrito esta vacio, primero añade prodcutos ', 'error')
      return
    }
    else{
      this.CartService.addPedidos().subscribe()
      console.log('post');
      localStorage.removeItem('lista')
      localStorage.removeItem('precio')
      this.CartService.cartList = []
      this.CartService.totalAPagar = 0;
      Swal.fire('Gracias por la compra','Su pedido fue tomado , esperamos que veulva pronto' ,'success')
      this.router.navigate(['/home/pasteles'])
    }
  }

}
