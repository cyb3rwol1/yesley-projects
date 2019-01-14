const Usuario = require('../models/usuario');
const Mensageria = require('../utils/mensageria.utils');
const MetodosUtil = require('../utils/metodos.utils');
const controllerUsuario = require('../controllers/usuario.controller');
const async = require('async');

const service = {};

service.getUsuarios = (req, res) => {
    controllerUsuario.valideCode(req.query)
        .then(()=>{
            Usuario.find({ _id: { $in: JSON.parse(req.query.codigo) } })
            .exec()
            .then((retorno) => {
                res.status(200).json(retorno == "" ? Mensageria.s0000() : retorno)
            })
            .catch((err) => {
                Mensageria.s0008(err);
                console.log(err,res);
            });
        })
        .catch((err)=> {
            res.status(400).json(Mensageria.s0007('codigo'));
        });
}

service.getAllUsuarios = (req, res) => {

    Usuario.find()
        .exec()
        .then((retorno) => {
            if (retorno == "") {
                res.status(200).json(Mensageria.s0000())
            } else {
                res.status(200).json(retorno)
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(Mensageria.s9999());
        })

}

service.createUsuario = (req, res) => {

    let create = Usuario.create(req.body);
    create
        .then(() => {
            res.status(200).json(Mensageria.s0003());
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json(Mensageria.s0006(err.errors));
        });
}

service.alterUsuario = (req, res) => {

    const { id } = req.params;
    let json = MetodosUtil.removeIdAndAtivo(new Usuario(req.body));

    console.log(json);

    Usuario.findOneAndUpdate({ "_id": id }, { $set: json }, { new: true, runValidators: true, context: 'query' })
        .exec()
        .then(() => {
            res.status(200).json(Mensageria.s0004());
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json(Mensageria.s0006(err.errors));
        });
}

service.deleteUsuario = async (req, res) => {
    const { id } = req.params;

    const usuario = await Usuario.findById(id);

    if (!usuario) res.status(400).json(Mensageria.s0002());

    await Usuario.findOneAndDelete({ "_id": id });
    res.status(200).json(Mensageria.s0005());
}

module.exports = service;