import { GuardGuard } from './auth/guards/guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:'cart',
    component:ShoppingCartComponent
  },
  {
    path:'auth',
    loadChildren:()=> import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=> import ( './home/home.module').then(m => m.HomeModule)
  },
  {
    path:'admin',
    loadChildren:()=> import ('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [ GuardGuard ],
    canActivate:[GuardGuard]
  },
  {
    path:'**',
    redirectTo:'home'
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


