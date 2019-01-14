const controller = {};

controller.valideCode= (req) => {
    return new Promise((resolve, reject)=>{
        console.log('Valide Code',req.query.codigo);
        if(req !== null)
            resolve();
        else 
            reject();
    });
}

module.exports = controller;