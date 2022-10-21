import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';

const ruta: Routes = [
  {
      path:'',
      children:[
          {
              path:'adminHome',
              component:AdminHomeComponent
          },
          {
              path:'list',
              component:ListComponent
          },
          {
              path:'**',
              redirectTo:'adminHome'
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ruta)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
