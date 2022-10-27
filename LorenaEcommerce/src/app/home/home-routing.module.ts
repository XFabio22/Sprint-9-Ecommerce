import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuYPreciosComponent } from './pages/menu-yprecios/menu-yprecios.component';


const ruta: Routes = [
    {
        path:'',
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'Menu&Pricing',
                component:MenuYPreciosComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ruta)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
