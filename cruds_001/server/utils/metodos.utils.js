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

Metodos.removeIdAndAtivo = (entidade) => {
    try {
        let jsonStr = JSON.stringify(entidade);
        let json = JSON.parse(jsonStr)
        delete json._id;
        delete json.ativo;

        return json;
    } catch (e) {
        return entidade;
    }
}


module.exports = Metodos;