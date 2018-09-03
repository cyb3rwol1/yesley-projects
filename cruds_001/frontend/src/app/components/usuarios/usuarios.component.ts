import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuariosService } from '../../services/usuarios.service'
import { Usuario } from '../../models/usuario';

declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  postOrPutUsuario(form?: NgForm) {
    console.log(form.value._id);
    if (form.value._id) {
      this.putUsuario(form);
    } else {
      this.postUsuario(form);
    }
  }

  postUsuario(form?: NgForm) {
    this.usuarioService.postUsuario(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({ html: res["mensagem"] });
        this.getUsuarios();
      });
  }
  
  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuario[];
      });
  }

  putUsuario(form?: NgForm) {
    this.usuarioService.putUsuario(form.value).subscribe(res => {
      this.resetForm(form);
      M.toast({ html: res["mensagem"] });
      this.getUsuarios();
    });
  }

  deleteEmployee(_id: string){
    this.usuarioService.deleteUsuario(_id).subscribe(res => {
      M.toast({ html: res["mensagem"] });
      this.getUsuarios();
    });
  }

  setUsuario(usuario: Usuario) {
    this.usuarioService.selectUsuario = usuario;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.usuarioService.selectUsuario = new Usuario();
    }
  }
}
