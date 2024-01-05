// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtrando números

const original = [5, 7, 13, 17, 26, 34, 118, 245];

const numeros = [];

for (let num of original) {
  if (num >= 10 && num <= 20) {
    numeros.push(num);
  } else if (num > 100) {
    numeros.push(num);
  }
}
console.log(numeros);
