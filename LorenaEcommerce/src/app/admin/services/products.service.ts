
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AddProduct, DBProduct, ProductsResponse } from '../interfaces/products.interfaces';
import { arrayPedidos } from '../interfaces/pedidos.interfaces';



@Injectable({
    providedIn: 'root'
})
export class productsService {
  
    private Base_UrL = environment.BaseUrL

    productsArr:DBProduct[] =[]

    get _productos (){
        return {...this.productsArr}
    }


    constructor(private http:HttpClient) { }
    getListPedidos():Observable<arrayPedidos>{
        const url = `${this.Base_UrL}`;
        return  this.http.get<arrayPedidos>(`${url}/pedidos/getPedidos`)
    }

    getDetailPedidos(id:string){
        const url = `${this.Base_UrL}/pedidos/${id}`
        return this.http.get<any>(url)
    }

    getListProdcuts():Observable<ProductsResponse>{
        const url = `${this.Base_UrL}`;
        return  this.http.get<ProductsResponse>(`${url}/producto/product`)
    }
    getListProdcutsCategory(category:string):Observable<any>{
        const url = `${this.Base_UrL}/producto/category`;
        const body = {category}
        return  this.http.post<any>(url,body)
    }

    addProducts(name:string ,img:string,price:number,discount:number,descripcion:string,category:string):Observable<AddProduct>{
        const url = `${this.Base_UrL}/producto/newProduct`
        const body = {name,category,price,discount,img,descripcion}

        return this.http.post<AddProduct>(url,body)
        .pipe(
            tap(res =>{
                if(res.ok){
                console.log('todo bien');
                
                }
            } ),
            map(res => res.ok),
            catchError(err => of(err.error.ok))
        )
    }


    deleteProdcuts(_id:string):Observable<any>{ 
        const url = `${this.Base_UrL}/producto/delete`
        const body ={_id}
        return this.http.post<any>(url,body)
    }

    edittProducts(id:string, name:string ,img:string,price:number,discount:number,descripcion:string,category:string) :Observable<any>{
        const url = `${this.Base_UrL}/producto/edit/${id}` 
        const body = {name,category,price,discount,img,descripcion}
        return this.http.put<any>(url,body)
    }

    getDetailProducts(id:string){
        const url = `${this.Base_UrL}/producto/${id}`
        return this.http.get<any>(url)
    }

    

}