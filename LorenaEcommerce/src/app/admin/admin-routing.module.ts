import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';

const rutasADMIN: Routes = [
    {
        path:'',
        component:AdminHomeComponent,
        children:[
            {
                path:'list',
                component:ListComponent
            },

            {
                path:'addProducts',
                component:AddProductsComponent
            },
            {
                path:'**',
                redirectTo:'list'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutasADMIN)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
