// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtrar maior string

const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, valorAtual, index, array) => {
    if (valorAtual.length > acumulador.length) {
        acumulador = valorAtual;
    }
    return acumulador;
});

console.log(maiorString);