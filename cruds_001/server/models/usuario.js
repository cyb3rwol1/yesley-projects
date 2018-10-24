const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nome: { type: String, required: true, maxlength: 50 },
    login: { type: String, unique: true, required: true, minlength: 8, maxlength: 50 },
    senha: { type: String, required: true, minlength: 8, maxlength: 50 },
    ativo: { type: Boolean, require: true, default: true }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);