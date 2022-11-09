import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// declare var paypal

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ViewChild('paypal' ,{static: true}) paypalElement! : ElementRef;
   ngOnInit(){
  //   paypal
  //   .buttons()
  //   .render(this.paypalElement.nativeElement);
  }
  
  title = 'LorenaEcommerce';
}
