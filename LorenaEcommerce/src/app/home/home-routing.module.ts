import { PastelesCelebrarComponent } from './pages/pasteles-celebrar/pasteles-celebrar.component';
import { PastelesFormalesComponent } from './pages/pasteles-formales/pasteles-formales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuYPreciosComponent } from './pages/menu-yprecios/menu-yprecios.component';
import { PastelesPersonalizadosComponent } from './pages/pasteles-personalizados/pasteles-personalizados.component';


const ruta: Routes = [
    {
        path:'',
        children:[
            {
                path:'',
                component:HomeComponent
            },
            {
                path:'pasteles',
                component:MenuYPreciosComponent
            },
            {
                path:'pasteles/customs',
                component:PastelesPersonalizadosComponent
            },{
                path:'pasteles/formales',
                component:PastelesFormalesComponent
            },
            {
                path:'pasteles/Celecrar',
                component:PastelesCelebrarComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ruta)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
