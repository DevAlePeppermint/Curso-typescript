function showError(msg: string) {
    throw new Error(msg)
}

'Algo deu errado'

//showError('Algo deu errado')
let n:number = 0;


function loopInfinito():never {
    while(true) {
        console.log(n++)
    }
}

loopInfinito()

