"use strict";
//interface recursiva
const frontEnd = {
    nome: 'Front-end',
    id: 1,
};
const backEnd = {
    nome: 'Back-end',
    id: 2,
};
const css = {
    nome: 'CSS',
    id: 3,
    categoriaPai: frontEnd,
};
let menu = {
    categorias: [frontEnd, backEnd]
};
console.log(menu);
console.log('_______________________________________');
let minhasTarefas;
minhasTarefas = ['Estudar CSS', 'Fazer exercicios', 1];
//# sourceMappingURL=interface_array.js.map