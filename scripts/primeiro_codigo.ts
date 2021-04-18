console.log('Hello World! Meu primeiro codigo em JS')
const nome = 'João'
console.log('Olá ' + nome + '. Seja bem vindo');

class Produto {


    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number) {
        this.nome = produtoNome;
        this.valor =  produtoValor;
        
    }
}

const baseBrunaTavares = new Produto('Base Bruna Tavares', 50)
