
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './pages/list/list.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';


import { AddProductsComponent } from './pages/add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { imgPipe } from './pipes/img.pipe';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { InfoPedidosComponent } from './components/info-pedidos/info-pedidos.component';








@NgModule({
  declarations: [
    ListComponent,
    AdminHomeComponent,
    AddProductsComponent,
    FormEditComponent,
    imgPipe,
    PedidosComponent,
    InfoPedidosComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
   
    ReactiveFormsModule,
    FormsModule,
    
  ],
})
export class AdminModule { }
