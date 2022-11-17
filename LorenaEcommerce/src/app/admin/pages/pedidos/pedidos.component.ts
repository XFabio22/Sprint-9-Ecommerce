import { arrayPedidos, DbPedido } from 'src/app/admin/interfaces/pedidos.interfaces';
import { Component, OnInit } from '@angular/core';
import { productsService } from '../../services/products.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(private productsService:productsService) { }
  DbPedido:DbPedido[]=[]


  ngOnInit(): void {
    this.productsService.getListPedidos()
    .subscribe((res:arrayPedidos) =>{
      this.DbPedido.push(...res.dbPedido)
      console.log(this.DbPedido );
      
    })
  
  }


  findIndes(){

  }


}
