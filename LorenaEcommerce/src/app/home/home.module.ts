import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuYPreciosComponent } from './pages/menu-yprecios/menu-yprecios.component';
import { PastelesPersonalizadosComponent } from './pages/pasteles-personalizados/pasteles-personalizados.component';
import { PastelesFormalesComponent } from './pages/pasteles-formales/pasteles-formales.component';
import { PastelesCelebrarComponent } from './pages/pasteles-celebrar/pasteles-celebrar.component';
import { BuyFormComponent } from './pages/buy-form/buy-form.component';
import { imgPipe2 } from './pipes/img.pipe2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  declarations: [
    HomeComponent,
    MenuYPreciosComponent,
    PastelesPersonalizadosComponent,
    PastelesFormalesComponent,
    PastelesCelebrarComponent,
    BuyFormComponent,
    imgPipe2

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class HomeModule { }
