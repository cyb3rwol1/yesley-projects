import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {UsuariosService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario';

declare let M: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuariosService]
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) {
  }

  ngOnInit() {
    this.getUsuarios();
  }

  postOrPutUsuario(form?: NgForm) {
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
        M.toast({html: res['mensagem']});
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
      M.toast({html: res['mensagem']});
      this.getUsuarios();
    });
  }

  deleteEmployee(_id: string) {
    this.usuarioService.deleteUsuario(_id).subscribe(res => {
      M.toast({html: res['mensagem']});
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
