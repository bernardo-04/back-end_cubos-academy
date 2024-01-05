// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtro de números positivos

const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const numerosPositivos = numeros.filter((numero) => {
  return numero > 0;
});

console.log(numerosPositivos);
