const Papel = require('../models/papel');
const Mensageria = require('../utils/mensageria.utils');
const MetodosUtil = require('../utils/metodos.utils');
const async = require('async');

const controller = {};

controller.getAllPapel = (req, res) => {
    Papel.find()
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

module.exports = controller;