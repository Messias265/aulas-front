`use strict`;


/* SOBRE UM SINAL DE IGUAL
Significa dar um valor (atribuir) a uma variavel/constante =

Quer fazer comparação de igualdade?
Pelo menos DOIS SINAIS DE IGUAL ==
Na duvida, use TRÊS ===*/


let estoque = 100;
if (estoque == 0) {
    console.log("Estoque Crítico");
} else if (estoque <= 10) {
    console.log("Estoque Baixo");
} else if(estoque > 10) {
    console.log("Estoque Normal");
}

/* Refatoração/refatora : implementar melhoria */

let resultado;
if(estoque ==0){
    resultado = "critica";
} else if(estoque <= 10){
    resultado = "baixo";
} else {
    resultado = "normal";
}

console.log("Estoque esta em situação "+resultado)