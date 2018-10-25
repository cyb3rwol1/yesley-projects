const mongoose = require('mongoose');
const Metodos = {};

//Mensageria
Metodos.agrupadorId = (ids) => {
    
    if (!ids) return;

    let arrId = JSON.parse(ids);
    let returnArrId = [];

    arrId.forEach(id => {
        returnArrId.push(new mongoose.Types.ObjectId(arrId[id]));
    });

    return returnArrId;
}

module.exports = Metodos;