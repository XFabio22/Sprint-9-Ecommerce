
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AddProduct, DBProduct, ProductsResponse } from '../interfaces/products.interfaces';



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

    addProducts(name:string ,img:string,price:string,discount:string,descripcion:string,category:Array<string>):Observable<AddProduct>{
        const url = `${this.Base_UrL}/producto/newProduct`
        const body = {name,category,price,discount,img,descripcion}

        return this.http.post<AddProduct>(url,body)
        // .pipe(
        //     tap(res =>{
        //         if(res.name){
        //           console.log("todo salio bien");
        //         }
        //     } ),
        //     map(res => res.name),
        //     catchError(err => of(false))
        //   )
    }



    

}