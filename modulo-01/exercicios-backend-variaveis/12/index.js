// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Taxa de Juros

let capital_inicial = 60000;
let montante = 90000;
let tempo = 24; // tempo em meses

const taxaJuros = Math.pow(montante / capital_inicial, 1/tempo) - 1;

console.log(`O seu financiamento de R$ ${capital_inicial} teve uma taxa de juros de ${(taxaJuros * 100).toFixed(3)}%, pois após 24 meses você teve que pagar R$ ${montante}.`);