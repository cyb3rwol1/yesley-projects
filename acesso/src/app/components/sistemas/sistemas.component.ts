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
        name: 'Acesso',
        url: 'javascript:void(0)',
        target :'_self'
      }, {
        icon: 'fab fa-algolia',
        name: 'Google Fotos',
        url: 'https://www.google.com/intl/pt-BR/photos/about/',
        target :'_blank'
      }, {
        icon: 'fab fa-apple',
        name: 'Apple',
        url: 'https://www.apple.com',
        target :'_blank'
      }, {
        icon: 'fas fa-shopping-cart',
        name: 'Marketplace',
        url: 'https://marketplace-dev.redetendencia.com.br/',
        target :'_blank'
      }
    ]
  }

  ngOnInit() {
  }

}
