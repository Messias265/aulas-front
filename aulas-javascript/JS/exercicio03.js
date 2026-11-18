'use strict'

console.log("Exemplo 3:");
const dados = {

    // Propriedade: valor
    nome: "Gabriel",
    data: "21/11/2005",
    celular:["(11)987738144","119999997"],
    endereco:{
        rua:"augusto",
        bairro:"caldo",
        numero:"015"
    }
};

console.log(`O ${dados.nome} nasceu em ${dados.data}.
    Ele tem o numero de celular :${dados.celular[0]}. Endereço: ${dados.endereco.rua} Bairro: ${dados.endereco.bairro} Numero:${dados.endereco.numero}.` )
