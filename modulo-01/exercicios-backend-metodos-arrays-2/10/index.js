// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtro de números pares

const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const numerosPares = numeros.filter((numero) => {
    return (numero % 2) === 0;
});

console.log(numerosPares);