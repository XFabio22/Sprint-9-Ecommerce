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
      
      if(this.authService.AuthUser?.admin === true){
        return true
      }else {
      
        return false
      }
     
  }
  canLoad(
    route: Route, 
    segments: UrlSegment[]): Observable<boolean> | boolean  {
      if(this.authService.AuthUser.admin === true){ 
        return true
      }else {        
        return false
      }
   }
}
