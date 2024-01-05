// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Validação de números pares

const numeros = [0, 122, 4, 6, 7, 8, 44];

const validarArray = numeros.every((numero) => {
    return (numero % 2) === 0;
});

if(validarArray) {
    console.log("Array válido");
} else {
    console.log("Array inválido");
}