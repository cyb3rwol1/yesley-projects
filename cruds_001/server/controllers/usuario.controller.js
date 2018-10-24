const Usuario = require('../models/usuario');
const Mensageria = require('../utils/mensageria.utils');

const usuarioController = {};

usuarioController.getUsuarios = async (req, res) => {
    const id = req.query.id;
    //const nome = req.query.nome;

    let retorno = id ? await Usuario.findById(id) : await Usuario.find();
    retorno != "" ? res.status(200).json(retorno) : res.status(200).json(Mensageria.s0000());
}

usuarioController.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);

    await usuario.save((err) => {
        if (err) res.status(400).json({ "Erros:": err.errors });
    });

    res.status(201).json(Mensageria.s0003());
}

usuarioController.alterUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha
    };

    await Usuario.findOneAndUpdate({ "_id": id }, { $set: usuario }, { new: true }, (err) => {
        if (err) res.status(400).json({ "erro:": err });
        res.status(200).json(Mensageria.s0004());
    });

}

usuarioController.deleteUsuario = async (req, res) => {
    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    if (!usuario) res.status(400).json(Mensageria.s0002());

    await Usuario.findOneAndDelete({ "_id": id });
    res.status(200).json(Mensageria.s0005());
}

module.exports = usuarioController;