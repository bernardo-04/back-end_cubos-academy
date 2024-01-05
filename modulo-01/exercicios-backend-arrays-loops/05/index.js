// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtrando apenas os pares

const original = [1, 4, 12, 21, 53, 88, 112];

const pares = [];

for (let num of original) {
  if (num % 2 === 0) {
    pares.push(num);
  }
}
console.log(pares);
