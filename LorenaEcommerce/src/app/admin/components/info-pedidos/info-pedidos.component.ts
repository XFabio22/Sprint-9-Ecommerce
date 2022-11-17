
import { ActivatedRoute } from '@angular/router';
import { productsService } from 'src/app/admin/services/products.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Pedido } from '../../interfaces/pedidos.interfaces';

@Component({
  selector: 'app-info-pedidos',
  templateUrl: './info-pedidos.component.html',
  styleUrls: ['./info-pedidos.component.scss']
})
export class InfoPedidosComponent implements OnInit {
  pedidos!:Pedido[]

  constructor(private productsService:productsService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
        
        this.ActivatedRoute.params
        .pipe( 
          switchMap(({_id} ) =>
        this.productsService.getDetailPedidos(_id))
          )
        .subscribe( res =>  this.pedidos =  res );
        
        

  }

}
