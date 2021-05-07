interface IProduto {
     nome: string;
     preco: number;
     descricao?: string;
     dataCadastro: Date;

}

const vestidoZara: IProduto = {
    nome:'Vestido Zara',
    preco: 49.90,
    descricao: 'Vestido em perfeitas condições de uso, azul com bolinhas',
    dataCadastro: new Date("6/5/2021"),

}

const camisaHering: IProduto = {
    nome: 'Camisa Polo Hering',
    preco: 75.90,
    descricao: 'Camisa Polo Hering, com tecido 100% algodão',
    dataCadastro: new Date("00/05/2021")
}

interface IAluno {
    nome: string;
    grr: string;
    posicao: number;
    isJubilando?: boolean;
}

const aluno01: IAluno =  {
    nome: 'Alexandra dos Santos',
    grr: '00000000',
    posicao: 77,
    isJubilando: true
}

const aluno02: IAluno = {
    nome: 'Maria Oliveira',
    grr: '036265',
    posicao: 52,

}





