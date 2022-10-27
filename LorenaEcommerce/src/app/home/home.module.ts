import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuYPreciosComponent } from './pages/menu-yprecios/menu-yprecios.component';





@NgModule({
  declarations: [
    HomeComponent,
    MenuYPreciosComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
