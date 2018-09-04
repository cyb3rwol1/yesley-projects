import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AppRoutingModule } from './/app-routing.module';
import { PapelComponent } from './components/papel/papel.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PapelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
