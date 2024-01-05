// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtro de nome por letra

const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const nomesComA = nomes.filter((nome) => {
    return nome[0] === "a" || nome[0] === "A";
});

console.log(nomesComA);