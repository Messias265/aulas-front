`use script`

let clientes = [
    {
        indentificador: 1,
        nome: "Dio"
    },
    {
        indentificador: 2,
        nome: "Ozzy"
    },
    {
        indentificador: 3,
        nome: "Ian"
    }
];

for (let i = 0; i < clientes.length; i++) {
    console.log(
        "- Cliente: " + clientes[i].nome +
        ", id: " + clientes[i].indentificador);
}

/*
    Versão do professor:

    for (const cliente of clentes){
    console.log(`- Cliente: ${cliente.nome}, id: ${cliente.identidicador}´)
    }; 
    
    */
