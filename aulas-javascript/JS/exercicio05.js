`use script`;
let valorCompra =1000;

let desconto = 0;
let valorDesconto = 0;
let valorFinal = 0;

if (valorCompra > 300) {
    desconto = 20;
} else if (valorCompra > 100) {
    desconto = 10;
} else{
    desconto = 0;
}

valorDesconto = (valorCompra * desconto) / 100;

valorFinal = (valorCompra - valorDesconto);

console.log("Valor da compra: R$ " + valorCompra);
console.log("Desconto de: " + desconto + "%");
console.log("Valor final da compra: R$ " + valorFinal);
console.log("Economizou: R$ " + valorDesconto);
