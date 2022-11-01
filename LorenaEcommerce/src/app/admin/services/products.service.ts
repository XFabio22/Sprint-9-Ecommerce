
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
    getListProdcutsCategory(category:string):Observable<any>{
        const url = `${this.Base_UrL}/producto/category`;
        const body = {category}
        return  this.http.post<any>(url,body)
    }

    addProducts(name:string ,img:string,price:number,discount:number,descripcion:string,category:Array<string>):Observable<AddProduct>{
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


    deleteProdcuts(_id:string):Observable<any>{ 
        const url = `${this.Base_UrL}/producto/delete`
        const body ={_id}
        return this.http.post<any>(url,body)
    }


    

}