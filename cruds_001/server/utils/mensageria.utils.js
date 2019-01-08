const m = {};

//Mensageria
m.s9999 = () => { return { codigo: "s9999", mensagem: "Erro inesperado, tente novamente ou contate o administrador do sistema." }; }
m.s0000 = () => { return { codigo: "s0000", mensagem: "Retornou vazio." }; }
m.s0002 = () => { return { codigo: "s0002", mensagem: "Entidade não encontrada na base de dados." }; }
m.s0003 = () => { return { codigo: "s0003", mensagem: "Criado com sucesso." }; }
m.s0004 = () => { return { codigo: "s0004", mensagem: "Atualizado com sucesso." }; }
m.s0005 = () => { return { codigo: "s0005", mensagem: "Removido com Sucesso." }; }
m.s0006 = (mensagem) => { return { codigo: "s0006", mensagem: "Erro de validação.", erros: removerCamposDoSemUsoValidator(mensagem) }; }
m.s0007 = (campo) => { return alterarNomeCampoDoJson(campo, { codigo: "s0007", mensagem: "Query param obrigatório.", erros: { campo: { "message": "Query param obrigatório." } } }); }
m.s0008 = (err,res) => { return createErrorResponse(err,res); }

//Valores de mensagem FIXAS
m.f0001 = () => { return "É obrigatório." };
m.f0002 = () => { return "Tamanho míximo inválido." };
m.f0003 = () => { return "Tamanho máximo inválido." };
m.f0004 = () => { return "Duplicidade não permitida." };

//Metodos PRIVATE
removerCamposDoSemUsoValidator = (mensagem) => {
    try {
        for (valor in mensagem) {
            delete mensagem[valor].properties;
            delete mensagem[valor].$isValidatorError;
            delete mensagem[valor].kind;
            delete mensagem[valor].path;
            delete mensagem[valor].name;
        }
        return mensagem;
    } catch (e) {
        return mensagem;
    }
}

alterarNomeCampoDoJson = (campo, obj) => {
    let json = JSON.stringify([obj]);
    return JSON.parse(json.replace("campo", campo));
}

createErrorResponse = (err,res) => {
    
    // if (err.name == 'CastError') {
    //     res = { 'status': 400, codigo: "s0008", mensagem: "valor do campo inválido.", erros: { campo: { message: "valor do campo inválido." } } };
    // }

    return res.status(400).json(s0000());
}

module.exports = m;