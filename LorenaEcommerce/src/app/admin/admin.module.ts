
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    CardProductsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
