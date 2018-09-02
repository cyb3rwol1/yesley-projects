const m = {};

//Mensageria
m.s0001 = () => { return { codigo: "s0001", mensagem: "Erro inesperado, tente novamente o contate o administrador." }; }
m.s0002 = () => { return { codigo: "s0002", mensagem: "Id não encontrado na base de dados." }; }
m.s0003 = () => { return { codigo: "s0003", mensagem: "Sucesso." }; }

module.exports = m;