const Usuario = require('../models/usuario');
const Mensageria = require('../utils/mensageria.utils');
const MetodosUtil = require('../utils/metodos.utils');
const Rules = require('../rules/usuario.rules');

const usuarioController = {};

usuarioController.getUsuarios = async (req, res) => {
    try {
        const allId = MetodosUtil.agrupadorId(req.query.id);
        let retorno = allId ? await Usuario.find({ _id: { $in: JSON.parse(req.query.id) } }) : await Usuario.find();
        retorno != "" ? res.status(200).json(retorno) : res.status(200).json(Mensageria.s0000());
    } catch (e) {
        console.log(e);
        res.status(500).json(Mensageria.s9999());
    }
}

usuarioController.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);

    if (!Rules.verificaDuplicidadeDeLogin(usuario.login)) res.status(400).json(Mensageria.s0007("login"));

    await usuario.save((err) => {
        if (err) res.status(400).json(Mensageria.s0006(err.errors));
    });
}

usuarioController.alterUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha
    };

    await Usuario.findOneAndUpdate({ "_id": id }, { $set: usuario }, { new: true }, (err) => {
        if (err) res.status(400).json({ "Erro:": err });
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