import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})
export class SistemasComponent implements OnInit {

  sistemas: any;

  constructor() {
    this.sistemas = [
      {
        icon: 'fas fa-at',
        name: 'E-mail'
      }, {
        icon: 'fab fa-algolia',
        name: 'Fotografias'
      }, {
        icon: 'fab fa-apple',
        name: 'Apple'
      }, {
        icon: 'fas fa-shopping-cart',
        name: 'Marketplace'
      }
    ]
  }

  ngOnInit() {
  }

}
