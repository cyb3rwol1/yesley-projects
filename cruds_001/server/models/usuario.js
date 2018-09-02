const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true }
});

module.exports = mongoose.model('Usuario',UsuarioSchema);