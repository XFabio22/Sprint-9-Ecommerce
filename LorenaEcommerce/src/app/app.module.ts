import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/components/footer/footer.component';
import { imgCart } from './pipes/imgcart.pipe';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShoppingCartComponent,
    FooterComponent,
    imgCart
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule ,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
