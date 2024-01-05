// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Soma dos pares

const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

for (let numPar of numeros) {
  if (numPar % 2 === 0) {
    soma += numPar;
  }
}
console.log(soma);
