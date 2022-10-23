import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DBProduct, ProductsResponse } from '../interfaces/products.interfaces';


@Injectable({
    providedIn: 'root'
})
export class productsService {

    private Base_UrL = environment.BaseUrL


    constructor(private http:HttpClient) { }

    getListProdcuts():Observable<ProductsResponse>{
        const url = `${this.Base_UrL}`;
        return  this.http.get<ProductsResponse>(`${url}/producto/product`)
    }

    addProducts(){
        
    }



    

}