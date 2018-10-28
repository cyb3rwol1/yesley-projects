const msg = require('../utils/mensageria.utils');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Utilizado para validar Unique
const uniqueValidator = require('mongoose-unique-validator');


const schema = new Schema({
    nome: { type: String, required: [true, msg.f0001()], maxlength: 50 },
    ativo: { type: Boolean, require: [true, msg.f0001()], default: true }
});

// Utilizado para validar Unique
schema.plugin(uniqueValidator, { message: 'Duplicidade não permitida.' });

module.exports = mongoose.model('Papel', schema);