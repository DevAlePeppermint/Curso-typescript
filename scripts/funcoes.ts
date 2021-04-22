function mostrarMensagem (texto: string | number | object): boolean {

    console.log(texto);
    
    return true

}

console.log(mostrarMensagem("Olá Feias"))
console.log(mostrarMensagem(300))
console.log(mostrarMensagem({nome: "Amanda"}))

/* ARROW FUNCTION */

const show = (codigo: number): number => {
    return codigo;
}





//Pode ser com espaço depois dos dois pontos ou não