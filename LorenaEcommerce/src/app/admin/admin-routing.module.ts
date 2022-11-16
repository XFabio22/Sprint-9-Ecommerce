import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { InfoPedidosComponent } from './components/info-pedidos/info-pedidos.component';

const rutasADMIN: Routes = [
    {
        path:'',
        component:AdminHomeComponent,
        children:[
            {
                path:'pedidos',
                component: PedidosComponent
            },
            {
                path:'list',
                component:ListComponent
            },

            {
                path:'addProducts',
                component:AddProductsComponent
            },
            {
                path:'list/edit/:_id',
                component:FormEditComponent
            },
            {
                path: 'pedidos/info/:_id',
                component:InfoPedidosComponent 
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutasADMIN)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
