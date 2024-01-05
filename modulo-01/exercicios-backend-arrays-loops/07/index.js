// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtrando nomes com a letra A

const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = [];

for (let nome of nomes) {
  if (nome[0] === "A" || nome[0] === "a") {
    nomesComA.push(nome);
  }
}
console.log(nomesComA);
