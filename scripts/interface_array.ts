
interface iCategoria {
    nome: string;
    id: number;
    categoriaPai? :iCategoria;
}
//interface recursiva

const frontEnd: iCategoria = {
    nome: 'Front-end',
    id: 1,
}

const backEnd: iCategoria = {
    nome: 'Back-end',
    id: 2,
}

const css: iCategoria = {
    nome: 'CSS',
    id: 3,
    categoriaPai: frontEnd,
}

interface iMenu {
    categorias: iCategoria[]
}

let menu: iMenu = {
    categorias: [frontEnd, backEnd]
}
console.log(menu);
console.log('_______________________________________')

//Quando inplementamos diretamente um array numa interface, precisamos declarar duas coisas:
// 1) qual o tipo do indice?
// 2) qual o tipo dos valores?
interface iToDo {
    [indice: number]: string | number;
}

let minhasTarefas: iToDo;
minhasTarefas = ['Estudar CSS', 'Fazer exercicios', 1 ]