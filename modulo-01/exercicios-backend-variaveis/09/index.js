// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Soma dos ângulos internos de um polígono

let lados = 6; // quantidade de lados do polígono
const somaAngulos = (lados - 2) * 180; // soma dos ângulos internos do polígono em graus
const angulo = somaAngulos / lados; // valor de cada ângulo em graus

console.log(`A soma dos ângulos internos do polígono é: ${somaAngulos}°`);
console.log(`Cada ângulo do polígono tem ${angulo}°`);