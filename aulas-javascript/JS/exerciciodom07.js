'use strict';

const form = document.querySelector("form");

const nota1 = document.querySelector("#nota1");
const nota2 = document.querySelector("#nota2");

const resultados = document.querySelectorAll("section div p");


form.addEventListener("submit", function(event){

    event.preventDefault();

    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);

    let media = (n1 + n2) / 2;


    resultados[0].textContent = `Média do aluno: ${media.toFixed(2)}`;
    


    if(media >= 6.5){
        resultados[1].textContent = "Aluno APROVADO";
        resultados[1].style.color = "blue"
        resultados[0].style.color = "blue"
    } else {
        resultados[1].textContent = "Aluno REPROVADO";
        resultados[0].style.color = "red"
        resultados[1].style.color = "red"
    }

});