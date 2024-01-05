// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Grupo de carros

function buscarCarro (carros, posicao) {
    const resultado = carros.slice(posicao, posicao*2).join(" - ");
    return resultado;
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

console.log(buscarCarro(nomes, posicao));