const mongoose = require('mongoose');

// const _URI = "mongodb+srv://yesley:bighead1@cruds1-6sqwq.gcp.mongodb.net/test?retryWrites=true";
const _URI = "mongodb://localhost:27017/teste";

const options = {
        useNewUrlParser: true,
        reconnectTries: 3,
        reconnectInterval: 500,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000
};

mongoose.Promise = global.Promise;

mongoose.connect(_URI, options)
        .then(db => console.log('Database conectado com sucesso!'))
        .catch(err => console.error('Database conexão:' + err));

module.exports = mongoose;