import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';

const ruta: Routes = [
  {
      path:'',
      children:[
          {
              path:'list',
              component:ListComponent
          },
          {
              path:'**',
              redirectTo:'list'
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ruta)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
