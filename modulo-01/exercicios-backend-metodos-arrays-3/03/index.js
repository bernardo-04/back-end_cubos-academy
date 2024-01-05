// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtrar maior número

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, valorAtual) => {
    if (valorAtual > acumulador) {
        acumulador = valorAtual;
    }
    return acumulador;
});

console.log(maiorNumero);