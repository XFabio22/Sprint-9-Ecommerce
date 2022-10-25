import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const ruta: Routes = [
    {
        path:'',
        children:[
            {
                path:'',
                component:HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ruta)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
