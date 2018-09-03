const Usuario = require('../models/usuario');
const M = require('../utils/mensageria.utils');

const usuarioController = {};

usuarioController.getUsuarios = async (req, res) => {
    const id = req.query.id;
    const nome = req.query.nome;

    if (id) {
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario);
    } else {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    }
}

usuarioController.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(M.s0003());
}

usuarioController.alterUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        nome: req.body.nome,
        idade: req.body.idade
    };
    
    await Usuario.findOneAndUpdate({ "_id": id }, { $set: usuario }, { new: true }, (err) => {
        if (err) res.status(400).json({ "erro:": err });
        res.status(200).json(M.s0003());
    });

}

usuarioController.deleteUsuario = async (req, res) => {
    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    if(!usuario) res.status(400).json(M.s0002());

    await Usuario.findOneAndDelete({ "_id": id });
    res.status(200).json(M.s0005());
}

module.exports = usuarioController;