// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Compra com desconto

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (em reais)
const valorDoProduto = 130;

const descontoCredito = 5/100; // deconto de 5%
const descontoCheque = 3/100; // desconto de 3%
const descontoDinheiroDebito = 10/100; // desconto de 10%

let valorComDesconto;

if (tipoDePagamento == "credito"){
    valorComDesconto = valorDoProduto - (valorDoProduto * descontoCredito);
} else if (tipoDePagamento == "cheque"){
    valorComDesconto = valorDoProduto - (valorDoProduto * descontoCheque);
} else if (tipoDePagamento == "debito" || tipoDePagamento == "dinheiro"){
    valorComDesconto = valorDoProduto - (valorDoProduto * descontoDinheiroDebito);
}
console.log(`Valor a ser pago: R$ ${valorComDesconto.toFixed(2)}`);