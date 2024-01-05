// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Lista de exercícios de Ordenação

//Arrays
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// a) Array números em Ordem crescente
numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

// b) Array números em Ordem decrescente
numeros.sort((a, b) => {
    return b - a;
});
console.log(numeros);

// c) Array números na Ordem do padrão Unicode
numeros.sort();
console.log(numeros);

// d) Array frutas em Ordem alfabética
frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas);

// e) Array frutas em Ordem alfabética decrescente
frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutas);

// f) Array frutas em Ordem crescente, de acordo com a quantidade de caracteres
frutas.sort((a, b) => {
    return a.length - b.length;
});
console.log(frutas);