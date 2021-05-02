"use strict";
function enviarEmail(para, assunto = "Sem assunto", remetente) {
    console.log({
        para,
        assunto,
        remetente
    });
}
enviarEmail('Amanda@gmail.com', 'Ola', 'Antonio Silva');
enviarEmail('Maria@gmail.com', 'Entrevista de emprego');
function inscricaoShow(nome, idade, sexo = 'Não informado', conheceuSite) {
    if (idade < 18) {
        console.log(`Sua idade (${idade}) não é permitida no clube`);
    }
    else {
        console.log({
            nome,
            idade,
            sexo,
            conheceuSite
        });
    }
}
inscricaoShow('Alice Nogueira', 13, 'Feminino', true);
//# sourceMappingURL=funcoes_padrao.js.map