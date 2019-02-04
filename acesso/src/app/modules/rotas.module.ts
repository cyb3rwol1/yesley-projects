import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoComponent } from '../components/autenticacao/autenticacao.component';
import { SistemasComponent } from '../components/sistemas/sistemas.component';
import { AcessoComponent } from '../components/acesso/acesso.component';

const appRoutes: Routes = [
  { path: 'autenticacao', component: AutenticacaoComponent, data: { title: 'Autenticação' } },
  { path: 'sistemas', component: SistemasComponent, data: { title: 'Sistemas' } },
  { path: 'acesso', component: AcessoComponent, data: { title: 'Acesso' } },
  {
    path: '',
    redirectTo: '/autenticacao',
    pathMatch: 'full'
  }
  //,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  exports: [RouterModule]
})
export class RotasModule { }
