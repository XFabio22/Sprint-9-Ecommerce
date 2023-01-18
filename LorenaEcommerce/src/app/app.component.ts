import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
 import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }

  
  title = 'LorenaEcommerce';
}
