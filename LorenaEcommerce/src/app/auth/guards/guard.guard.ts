import { authService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate, CanLoad {
  constructor(private authService:authService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > |  boolean  {
      if(this.authService._user?.admin === true){
        return true
      }else {
        this.router.navigate([['']])
        return false
      }
     
    //this.authService.tokenValidate()
    // .pipe(
    //   tap (valid =>{
    //     if(!valid){
    //       this.router.navigate([['']])
    //     }
    //   })
    // )
  }
  canLoad(
    route: Route, 
    segments: UrlSegment[]): Observable<boolean> | boolean  {
      if(this.authService._user?.admin === true){

        return true
      }else {
        this.router.navigate([['']])
        return false
      }
     
  //   return  this.authService.tokenValidate()
  //   .pipe(
  //     tap (valid =>{
  //       if(!valid){
  //         this.router.navigate([['']])
  //       }
  //     })
  //   )
   }
}
