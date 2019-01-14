import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  readonly URL_API = 'http://localhost:3000/usuario';
  selectUsuario: Usuario;
  usuarios: Usuario[];

  constructor(private http: HttpClient) {
    this.selectUsuario = new Usuario;
  }

  getUsuarios() {
    return this.http.get(this.URL_API + '/all');
  }

  postUsuario(usuario: Usuario) {
    delete usuario['_id'];
    return this.http.post(this.URL_API, usuario);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
