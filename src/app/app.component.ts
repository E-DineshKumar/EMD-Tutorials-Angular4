import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible:string="fab";
  constructor() { 
    localStorage.setItem("visible",this.visible) ;
   // console.log(this.visible);
    
   }
}
