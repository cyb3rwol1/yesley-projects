const m = {};

//Mensageria
m.s0000 = () => { return { codigo: "s0000", mensagem: "Retornou vazio." }; }
m.s0001 = () => { return { codigo: "s0001", mensagem: "Erro inesperado, tente novamente ou contate o administrador do sistema." }; }
m.s0002 = () => { return { codigo: "s0002", mensagem: "ID não encontrado na base de dados." }; }
m.s0003 = () => { return { codigo: "s0003", mensagem: "Criado com sucesso." }; }
m.s0004 = () => { return { codigo: "s0004", mensagem: "Atualizado com sucesso." }; }
m.s0005 = () => { return { codigo: "s0005", mensagem: "Removido com Sucesso." }; }

module.exports = m;