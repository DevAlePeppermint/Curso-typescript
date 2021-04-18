const filmesCategorias: string[] = ["Drama", "Adveture", "Romance",];

const anosFilme: Array <number> = []

for (let ano = 2000; ano <= new Date().getFullYear(); ano++){

    anosFilme.push(ano)
}

console.log(anosFilme);

const cadastro: (string|number)[] = ["Ana", 23, "Medica"];
const cadastro2: Array <number|string> = ["Maria", 37, "Bancaria"]

//os dois tipos acima funcionam para colocar varios tipos dentro de um array