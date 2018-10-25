export class Usuario {
    _id: string;
    nome: string;
    login: string;
    senha: string;
    ativo: boolean;
    
    constructor(_id = '', nome = '', login = '', senha = '', ativo = true) {
        this._id = _id;
        this.nome = nome;
        this.login = this.login;
        this.senha = this.senha;
        this.ativo = ativo;
    }
}
