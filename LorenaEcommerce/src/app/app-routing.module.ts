import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProductsComponent } from './admin/components/card-products/card-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:'Menu&Pricing',
    component:ShoppingCartComponent
  },
  {
    path:'auth',
    loadChildren:()=> import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    loadChildren:()=> import ( './home/home.module').then(m => m.HomeModule)
  },
    {
      path:'admin',
      loadChildren:()=> import ('./admin/admin.module').then(m => m.AdminModule) 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


