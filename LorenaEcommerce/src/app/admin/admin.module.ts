
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { ListComponent } from './pages/list/list.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AddProductsComponent } from './pages/add-products/add-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormEditComponent } from './components/form-edit/form-edit.component';





@NgModule({
  declarations: [
    CardProductsComponent,
    ListComponent,
    AdminHomeComponent,
    AddProductsComponent,
    FormEditComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
