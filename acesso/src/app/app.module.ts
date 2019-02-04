import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RotasModule } from './modules/rotas.module';

import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component';
import { SistemasComponent } from './components/sistemas/sistemas.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,

    AutenticacaoComponent,
    SistemasComponent,
    AcessoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RotasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
