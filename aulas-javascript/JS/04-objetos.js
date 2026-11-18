'use strict'

// Exemplo 1: objeto com dados de uma pessoa
console.log("Exemplo 1:");
const pessoa = {
    // Propriedade: valor
    nome: "Chapolim Colorado",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP",
    "Empresa que trabalha": "Senac" // atenção neste caso
};

// Acesso direto (pra programador)
console.log(pessoa);

// Acesso a cada propriedade (sintaxe usando .) 
console.log(pessoa.nome);
console.log(pessoa.idade +" anos");

console.log(pessoa["nome"]); // usando [] menos comum
console.log(pessoa["Empresa que trabalha"]); // [] obrigatório

console.log("\n ---\n");

// Exemplo 2: com array
console.log("\nExemplo 2:");
const livro = {
    titulo: "O senhor dos rings",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do ring",
        "As duas torres",
        "O retorno do rei"
    ]
}

console.log(livro);
console.log(`${livro.titulo} é famoso`);
console.log(`${livro.volumes[0]} é o primeiro livro`);

let idade = 25;
console.log("Minha idade é: "+idade)

// Exemplo 3: array de objetos
console.log("\nExemplo 3:")

const livros =[
    {
        titulo: "O Homen de Giz",
        ano: 2011
    },
    {
        titulo: "O Pequeno Principe",
        ano: 1947
    },
    {
        titulo: "Duna",
        ano: 1965
    }

];

console.log(livros);
console.log(livros[1].titulo);

/* Mini-exercicio:
ACesse adequadamente os dados de array livros e mostre a mensagem:

Os livros O Homen de Giz e Duna são titulos famosos na literatura. Respectivamente, foram lançados em 2011 e 1965.*/



console.log("\Exemplo 4:")
console.log(`Os livros ${livros[0].titulo} e ${livros[2].titulo} são titulos famosos na literatura. Respectivamente, foram lançados em ${livros[0].ano} e ${livros[2].ano}.`)
