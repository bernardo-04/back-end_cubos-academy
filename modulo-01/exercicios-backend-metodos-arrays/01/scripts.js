// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Teste suas habilidades

const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

//Invertendo a ordem do array
frutas.reverse();
const stringFrutas = frutas.join(", ");
console.log(stringFrutas);

frutas.reverse();
console.log("\n");

//Removendo o primeiro e o último e adicionando o elemento "Melão"
frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1, "Melão");
console.log(frutas);
