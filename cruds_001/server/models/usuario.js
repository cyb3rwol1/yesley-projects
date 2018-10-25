const mensageria = require('../utils/mensageria.utils');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const UsuarioSchema = new Schema({
    nome:  { type: String, required: true, maxlength: 50 },
    login: { type: String, required: [true, mensageria.f0001()], minlength: [8, mensageria.f0002()], maxlength: [50, mensageria.f0003()] },
    senha: { type: String, required: true, minlength: 8, maxlength: 50 },
    ativo: { type: Boolean, require: true, default: true }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);