import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papel',
  templateUrl: './papel.component.html',
  styleUrls: ['./papel.component.css']
})
export class PapelComponent implements OnInit {

  menuFlexOptions: any;
  menuFlexItems: any;
  constructor() { }

  ngOnInit() {
    this.menuFlexOptions = [
      {
        nome: 'A', items: [
          { nome: '1', items: [{ nome: 'AA' }, { nome: '2A' }] },
          { nome: '2', items: [{ nome: '1AA' }, { nome: '2B' }] }
        ]
      },
      {
        nome: 'B', items: [
          { nome: '1', items: [{ nome: '1A' }, { nome: '2A' }] },
          { nome: '2', items: [{ nome: '1B' }, { nome: '2B' }] }
        ]
      },
      { nome: 'C' }
    ];

    this.menuFlexItems = {
      content: { classes: 'd-flex d-sm-flex flex-column bg-dark float-right overflow-auto' },
      body: { classes: 'bg-info' },
      menu: { classes: 'd-flex btn btn-info text-left text-white pl-1 py-1 border-bottom border-dark rounded-0'},
      submenu: { classes: 'd-flex btn btn-dark text-left text-white pl-2 py-1 rounded-0'},
      undermenu: { classes: 'd-flex btn btn-secondary text-left text-white pl-3 py-1 rounded-0'}
    };
  }

}
