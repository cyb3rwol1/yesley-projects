
const usuarioRules = {};

usuarioRules.verificaDuplicidadeDeLogin = (login) => {
    console.log('verificaDuplicidadeLogin :' + login);
    return false;
};

usuarioRules.verificaCamposObrigatórios = (usuario) => {

    

    return [];
};

module.exports = usuarioRules;