"use strict";
const cursoJS = {
    titulo: 'Curso completo JavaScript',
    descricao: 'Se você deseja ser um bom programador, precisa conhecer o curso JS',
    preco: 19.90
};
//sobrescrevendo titulo, sem readOnly
cursoJS.titulo = 'Curso PHP8';
// cursoJS.preco = 12,90;
//Cannot assign to 'preco' because it is a read-only property.ts(2540)
console.log(cursoJS);
//# sourceMappingURL=interface_readonly.js.map