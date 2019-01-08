const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
const _PORT = 3000;
app.set('port', process.env.PORT || _PORT);

//Middlewares
// Apresenta msg no console quando executado o dev
app.use(morgan('[:date[clf]] request :method ":url" status: :status - :response-time ms'));

// Para identificar JSON nas requisições
app.use(express.json());
// Liberar acesso de outros servidores
app.use(cors({ origin: 'http://localhost:4500' }));

//Routes
app.use('/', require('./routes/routes.js'));

app.get('/', (req, res) => {
    res.status(200).json({ mensagem: "API OK! =D" });
});

//Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port:' + app.get('port'));
});