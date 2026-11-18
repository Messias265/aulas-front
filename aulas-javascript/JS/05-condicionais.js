'use strict';
/* Operadoes RELACIONAIS
== (IGUALIDADE PRO VALOR), === (IGUALIDADE POR VALOR E TIPO)
< (MENOR), > (MAIOR), <= (MENOR OU IGUAL), >= (MAIOR OU IGUAL) 
!= (DIFERENÇA POR VALOR), !==(DIFERENÇA POR VALOR E TIPO)*/

let a= 10;
let b=10;
let c=100;
let d = "100"; //valor como string/texto


console.log(a > b);   // false (A não é maior que B)
console.log(a >=b);  // True (A é igual a B)
console.log( c !=a); // True (C é diferente de A)

// Comparando apenas VALOR (usando ==)
console.log(c == d); //true, pois VALORES  são os mesmos

//Comparando VALOR e TIPO DE DADO (usando ===)
console.log(c ===d); //false, pois TIPO DE DADO é diferente

/* Comandos CONDICIONAIS */
/* if(se),else(senão), else if(senão se)
switch/case/default */

console.log("\nExemplo 1:SIMPLES (if)");
let numero = 30;

if(numero >= 20){
    console.log("Se você ver esta mensagem, é porque a condição é true (verdadeira)");
}
// Quando se trata de uma unica ação, podemos omitur as chaves e deixar em uma linha
if(numero >= 20) console.log("Uma unica acão");

// condicional COMPOSTA(if/else)
console.log("\nExemplo 2: COMPOSTA (if/else)");

const aluno = "Marcelo";
let idade = 88;

// Logica 1: condição maior ou igual a 18
if(idade >= 18){
    console.log(aluno + " é maior de idade.");
} else {
    console.log(aluno + " é menor de idade.");
}

/* Operador chamado de ternario ?:
VErsão curta de if/else (shorthand if/else) */
let situacao = idade >= 18 ? "maior" : "menor";

console.log(`${aluno} é ${situacao} de idade.`);

// condicional ENCADEADA (if/else if/else)
    console.log("\nExemplo 3: ENCADEADA (if/else if/else)");


    let media = + 7;
    let resultado = media >= 7 ? "aprovado" : "reprovado";
    
    console.log(aluno + " esta " +resultado);
    /* Determinar o desempenho do aluno de acord com a media que teve.
    Desemepenhos possiveis:
    -media acima de 9? Otimo
    -media acima de 7? Bom
    -media acima de 5? ruim
    -media acima até 5? pessimo */
if(media > 9){
    console.log("OTIMO");
} else if(media > 7){
    console.log("BOM");
} else if(media > 5){
    console.log("RUIM");
} else { //Aqui, basta o else (sem if, sem condição) pois é o que restou
    console.log("PESSIMO");
}