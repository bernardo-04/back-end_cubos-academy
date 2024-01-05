// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Encontrando o maior

const numeros = [3, 24, 1, 8, 11, 7, 15];

let maior = numeros[0];

for (let num of numeros) {
  if (num > maior) {
    maior = num;
  }
}
console.log(maior);
