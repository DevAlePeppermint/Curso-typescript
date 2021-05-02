function enviarEmail (para: string, assunto:string = "Sem assunto", remetente?:string):void {
    console.log({
        para,
        assunto,
        remetente
    });
    
}

enviarEmail('Amanda@gmail.com','Ola', 'Antonio Silva')
enviarEmail('Maria@gmail.com', 'Entrevista de emprego')

function inscricaoShow (nome:string, idade:number, sexo:string = 'Não informado', conheceuSite?: boolean) {
    if (idade < 18) {
        console.log(`Sua idade (${idade}) não é permitida no clube`);
        
    } else {
        console.log({
            nome,
            idade,
            sexo,
            conheceuSite
        });
    }
}
inscricaoShow('Alice Nogueira', 13, 'Feminino', true)