// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Cálculo do Perímetro e Área de um cícrulo

const pi = 3.14; // valor de π
let raio = 1;

const perimetro = 2 * pi * raio;
const area = pi * (raio ** 2);

console.log(`O perímetro do círculo é aproximadamente ${perimetro.toFixed(1)}`);
console.log(`A área do círculo é aproximadamente ${area}`);