`use sctrct`;

console.log("Exemplo 1:while (enquanto):");
/* Logica : enquanto uma condição for VERDADEIRA, faça/execute ações/processos.*/

//Variavel de controle de repetição (contadora)
let contador = 1;

while(contador <= 5){
    console.log("Valor da Variavel: "+contador);

    // Atualiza o valor da Variavel de controle (incrementa)
    contador++;
    //contador = contador + 1;
}

console.log("\nExemplo 2: for (para):");
/* Logica: execute uma serie de ações a partir de um valor inicial até um valor final */
for( let i = 1; i <= 10; i++ ){
    console.log("I vale: "+i);
}

console.log("\nExemplo 3: Loop para acessar ARRAY");
/* Logica: execute ações enquanto existir dados no array */

const bandas = ["Slayer", "Nightwish", "Rush", "Metallica", "Testament", "Ice Earth", "Scorpions", "Kiss"];

/* Comweçamos em ZERO obrigatoriament, e a condição de repetição é enquanto o "i" for menor que a quantidade de elementos do array

Propriedade length: comprimento/tamanho/quantidade de elemtentos*/

// Boa pratica guardar o tamanho do array ANTES de inciar o loop
let tamanho= bandas.length; //cache (memoria)
for(let i = 0; i < tamanho; i++){
    console.log(bandas[i]);
}

console.log("\nExemplo 4: for/of: Loop especifico para ARRAY");
const alunos =["Marcelo", "Alexandre", "Emillye", "Yuri", "Raquel", "Perola"];

/* Logica: acessando cada aluno a partir do array alunos */
for(const aluno of alunos){
    console.log(aluno);
}

console.log("\nExemplo 5: for/in: Loop especifico para OBJETO");
const pessoa = {
    Nome: "Seu Madruga",
    Idade: 66,
    cidade: "São Paulo"
};

/* Logica: acessando as propriedades do objeto pessoa */
for(const propriedade in pessoa){
    // console.log(propriedade); //traz apenas o nome da prop.
    console.log(pessoa[propriedade]); //traz os valores
}

