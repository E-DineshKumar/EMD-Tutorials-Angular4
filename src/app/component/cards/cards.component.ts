import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  flag : boolean;
  constructor() { }

  ngOnInit() {
    this.flag=true;
  }

}
