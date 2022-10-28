import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuYPreciosComponent } from './pages/menu-yprecios/menu-yprecios.component';
import { PastelesPersonalizadosComponent } from './pages/pasteles-personalizados/pasteles-personalizados.component';
import { PastelesFormalesComponent } from './pages/pasteles-formales/pasteles-formales.component';
import { PastelesCelebrarComponent } from './pages/pasteles-celebrar/pasteles-celebrar.component';





@NgModule({
  declarations: [
    HomeComponent,
    MenuYPreciosComponent,
    PastelesPersonalizadosComponent,
    PastelesFormalesComponent,
    PastelesCelebrarComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
