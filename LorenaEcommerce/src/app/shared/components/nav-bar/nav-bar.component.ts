import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: authService ,private router:Router) { }
  public isCollapsed = true;
  public isLogged = false;

  ngOnInit(): void {
  }
  userIsLogged() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    } 
    console.log(this.auth);
  }


  logout(){
    localStorage.clear();
  //  localStorage.removeItem('token')
    this.isLogged = false;
    this.router.navigate(['/']);
    this.authService._user = {admin:false,name:'',uid:''}
  }
  get auth(){
    return this.authService.AuthUser
  }
}
