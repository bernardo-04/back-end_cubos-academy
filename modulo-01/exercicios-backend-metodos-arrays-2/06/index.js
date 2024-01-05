// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtro de caracteres

const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const filtroNomeCidades = cidades.filter((cidade) => {
    return cidade.length <= 8;
});

console.log(filtroNomeCidades.join(", "));