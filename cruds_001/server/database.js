const mongoose = require('mongoose');

//const _URI = "mongodb+srv://yesley:bighead1@cruds1-6sqwq.gcp.mongodb.net/test?retryWrites=true";
const _URI = "mongodb://localhost:27017/teste";

mongoose.connect(_URI, { useNewUrlParser: true })
        .then(db => console.log('Database conectado com sucesso!'))
        .catch(err => console.error('Database conexão:' + err));

module.exports = mongoose;