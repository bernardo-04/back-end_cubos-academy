// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Desconto do tênis

let valorTenis = 129.99; // preço do tenis em reais
let dinheiro = 80; // quantidade de dinheiro que o comprador tem
let valorDesconto = valorTenis - dinheiro; // valor do desconto que o comprador precisa

// fórmula para calcular o desconto
// desconto = valorDesconto * 100 / valorTenis
let desconto = valorDesconto * 100 / valorTenis;

console.log(`Será necessário um desconto de ${desconto.toFixed(1)}%.`);