// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Extrato de Compra Online

//valor do produto comprado em reais.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorParcela;
let valorTotalFaltante;

if(valorDoProduto === valorPago){
    valorTotalFaltante = 0;
    valorParcela = 0;
} else {
    valorParcela = valorDoProduto / quantidadeDoParcelamento;
    valorTotalFaltante = valorDoProduto - valorPago;
}

console.log(`Restam ${valorTotalFaltante / valorParcela} parcelas de R$ ${valorParcela.toFixed(2)}`);