
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { ListComponent } from './pages/list/list.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    CardProductsComponent,
    ListComponent,
    AdminHomeComponent,
    AddProductsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
