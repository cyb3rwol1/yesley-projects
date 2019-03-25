import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'cur';

  @Input() formularioDefault: any;


  ngOnInit(){
    this.formularioDefault = {
      nome : 'Yesley Gonçalves Miranda'
    }
  }

  imprimirSomenteCur(){
    window.print();
  }

  updateForm(formFields : NgForm){
    console.log('formFields',formFields.value);
    this.formularioDefault.nome = formFields.value.formularioDefault.nome;

  }

}
