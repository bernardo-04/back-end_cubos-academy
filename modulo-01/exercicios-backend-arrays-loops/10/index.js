// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Para pensar um pouco mais

const numeros = [8, 11, 4, 1];

let maior = numeros[0];
let menor = numeros[1];
let diferenca;

for (let num of numeros) {
  if (num > maior) {
    maior = num;
  } else if (num < menor) {
    menor = num;
  }
}
diferenca = maior - menor;
console.log(diferenca);
