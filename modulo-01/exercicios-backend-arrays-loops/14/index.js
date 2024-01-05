// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Imprima os menores

const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let i = 0; i < arrayA.length; i++) {
  if (arrayA[i] < arrayB[i]) {
    console.log(arrayA[i]);
  } else {
    console.log(arrayB[i]);
  }
}
