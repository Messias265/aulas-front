// Modo estrito da linguagem
/* Sem a declaração abaixo, corremos o risco de esquecer de declarar explicitamente variáveis e constantes (ou seja, usar let e const) e também de usar palas-chave (reserver words) da linguagem */
'use strict';

console.log("Este é JS externo");
console.log("A programação feita aqui será acessada pela página HTML");

// Usando uma variável sem DECLARAR (sem let)
aluno = "Fulano";
console.log(aluno); // erro, poid não usamos let

// Usar palavras-chave reservadas
let aluno = "Fulano"
console.log(public); // erro, pois public é reservada