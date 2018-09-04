import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from '../app/components/usuario/usuario.component';
import { PapelComponent } from '../app/components/papel/papel.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent, data: { title: 'Usuários' } },
  { path: 'papel', component: PapelComponent, data: { title: 'Papel' } }

];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
