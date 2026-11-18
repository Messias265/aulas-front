'use strict';

// 1) Função Anõnma: Criada/Associada a uma constante
const exemplo1 = function(){
    console.log("Olá! Esta é uma função Anônima");
};

// Chamar/Invocar a função
exemplo1();

/* Atenção: nesta sintaxe (função anônima)  você deve PRIMEIRO declarar a função, para só DEPOIS Chama-la*/

// 2) Função nomeada/declarada: criada de forma livre
exemplo2(); //chamando antes (funciona!)

function exemplo2(){
    console.log("Oi! Esta é uma função declarada/noemada");

}
exemplo2(); //chamando depois (funciona!)

// 3) Arrow Function (função flecha/seta) : cria/associa a uma constante 
const exemplo3 = () => {
    console.log("E aqui temos uma arrow function!");
};
exemplo3(); //atenção: so pode cha,ar DEPOIS DE declarar

/* Funções com parâmetros (ou argumentos)
Usamos parâmetros quando é necessario que a função receba algum dado de entrada para realizar processamentos.

Exemplo: uma função que calcula frete, precisaria receber dados como CEP de entrega, peso dos produtos etc.*/

console.log("\nFunções com parâmetros/argumentos:");

//Parâmetro com valor padrão: declaramos o parâmetro e colocamos um valor nele. Caso nada seja passado na chamada da função, é este valor que passa a ser usado
function darUmaSaudacao(nome){
    console.log("Bem-vindo(a) "+nome);
}
//Chamando a função e passando valores (nomes) diferentes
darUmaSaudacao("Marcelo");
darUmaSaudacao("Gabriel");
darUmaSaudacao("Pérola");
darUmaSaudacao(); //neste caso, Visitante passa a ser usado

/* Funções com parâmetros e RETORNO de resultado */
function multiplicar(valor1, valor2){
    return valor1 * valor2;
}

console.log("Resultado 1: " +multiplicar(10,5) );
let resultado2 = multiplicar(100,50); //recebendo/guardando o retorno da função

console.log("Resultado 2: "+resultado2);

/* Formatar valores monetarios */
let preco = 5000;
let desconto = preco *0.1; //10%
let precoFinal = preco - desconto;

function formatarMoeda (valor, digitos = 2) {
    return new Intl.NumberFormat("pt-br", {
        style:"currency",
        currency: "BRL",
        minimumFractionDigits: digitos
    }).format(valor);
}

console.log("preço iniciail: "+formatarMoeda(preco));
console.log("Desconto: "+formatarMoeda(desconto, 3));
console.log("Preço final: "+formatarMoeda(precoFinal));

console
.log("\n\n");

//Versão 1: sintaxe normal (declarada/ nomeada)
/* function calcularDobro(valor){
    return valor * 2;
} */

// Versão 2: Sintaxe ARROW FUNCTION
/* const calcularDobro = (valor) => {
    return valor *2;
}; */


//Versão 3: sintaxe ARROW FUNCTION com retorno implicito
//Nesta Versão, podemos omitir os parêntesses (pois ha somento UM parâmetro) e as chaves e return (pois há somento uma unica ação sendo feita).
const calcularDobro = valor => valor * 2;



//Chamada da função (obs: sempre APOS declarar a Arrow Function)
console.log(calcularDobro(10));

/*  Função callback (Função como parâmetro de outra função) */

const numeros = [10,20,5,123];
//Versão 1: Usando função callback nomada/declarada
/* const numerosMultiplicados = numeros.map( function(numero){
    return numero * 3;
} ); */

//Versão 2: Usando função callback arrow function
const numerosMultiplicados = numeros.map( numero => numero *3);

console.log(numeros);
console.log(numerosMultiplicados);