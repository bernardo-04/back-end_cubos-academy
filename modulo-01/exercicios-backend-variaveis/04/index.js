// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Calcular Juros Compostos

let capital = 1000;
let taxaJuros = 0.125;
let tempo = 5;

let montante = capital*(1 + taxaJuros)**tempo; //fórmula para calcular o montante

console.log(`O valor do montante é: R$ ${montante.toFixed(2)}`);