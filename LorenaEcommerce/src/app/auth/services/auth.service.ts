import { AuthResponse, Usuario } from './../interfaces/authResponse.inteface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService {

  private Auth_URL = environment.BaseUrL

  constructor(private http:HttpClient) { }

  private  _user!:Usuario | undefined
  public isLogged = false;
  get AuthUser(){
    return {...this._user!}
  }

  tokenValidate():Observable<boolean> {
    const url = `${this.Auth_URL}/auth/renew`
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token')|| '')
    if(!localStorage.getItem('token') || localStorage.length == 0){ //return si no hay token en localstorage para evitar hacer peticiones sin sentido
        return of(false)
    }
    return this.http.get<AuthResponse>(url,{headers})
    .pipe(
        map(res => {
            localStorage.setItem('token',res.token!)
            this._user ={
                name : res.name!,
                uid: res.uid!,
                admin:res.admin!
            }
            return res.ok
        }),catchError(err => of(false))
    )
    
}





  login(email:string,password:string){
    const url = `${this.Auth_URL}/auth`
    const body = {email , password}
    return this.http.post<AuthResponse >(url,body)
    .pipe(
        tap(res =>{
            if(res.ok){
                localStorage.setItem('token',res.token!)
                this._user ={
                    name : res.name!,
                    uid: res.uid!,
                    admin:res.admin!
                }
                
            }
        }),
        map(res => res.ok),
        catchError(err => of(err.error.msg))

    )

  }

  register(name:string, email:string,password:string,admin:boolean){
    const url = `${this.Auth_URL}/auth/new`;
    const body = {name,email,password,admin};

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap(res =>{
        if(res.ok){
            localStorage.setItem('token',res.token!)
            this._user ={
                name : res.name!,
                uid: res.uid!,
                admin:res.admin!
            }
            
          }
      } ),
      map(res => res.ok),
        catchError(err => of(err.error.msg))
    )

}


}
