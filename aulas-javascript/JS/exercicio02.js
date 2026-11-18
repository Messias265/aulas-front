'use strict'

let jojo = [
    "Jonathan", 
    "Joseph", 
    "Jotaro", 
    "Josuke", 
    "Giorno", 
    "Jolyne", 
    "Johonny"
];

console.table(jojo);

// Concatenação: uso de ASPAS ('simples') ou ("duplas")
// Template string: uso de CRASES (``) e ${}

let frase = `O ${jojo[1]} foi um pessimo marido, e pai ausente, igual o pai do ${jojo[4]} que também não foi presente, bem similar ao pai do ${jojo[6]}, foi ele ficar paraplegico que abandonaram ele, mas pelo menos o papai dele fingiu gostar dele.`
console.log(frase);
