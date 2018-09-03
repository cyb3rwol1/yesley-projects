export class Usuario {

    constructor(_id = '', nome='',idade=0) {
        this._id = _id;
        this.nome = nome;
        this.idade = idade;
     }

    _id: string;
    nome: string;
    idade: number;
}
