const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Settings
const _PORT = 3000;
app.set('port',process.env.PORT || _PORT);

//Middlewares
    // Apresenta msg no console quando executado o dev
app.use(morgan('dev')); 
    // Para identificar JSON nas requisições
app.use(express.json());

//Routes
app.use('/',require('./routes/usuario.routes.js'));

app.get('/',(req,res) => {
    res.status(200).json({ mensagem: "API OK! =D" });
});

//Start Server
app.listen(app.get('port'), () =>{
    console.log('Server on port:' + app.get('port'));
});