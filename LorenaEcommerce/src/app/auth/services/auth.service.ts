import { AuthResponse, Usuario } from './../interfaces/authResponse.inteface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, of,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService {

  private Auth_URL = environment.BaseUrL

  constructor(private http:HttpClient) { }

  private _user!:Usuario | undefined
  get AuthUser(){
    return {...this._user!}
  }
  login(email:string,password:string){

  }

  register(name:string, email:string,password:string){
    const url = `${this.Auth_URL}/auth/new`;
    const body = {name,email,password};

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap(res =>{
        if(res.ok){
            localStorage.setItem('token',res.token!)
            this._user ={
                name : res.name!,
                uid: res.uid!
            }
          }
      } ),
      map(res => res.ok),
      catchError(err => of(false))
    )

}
  statusUser(){

  }

  logout(){

  }

}
