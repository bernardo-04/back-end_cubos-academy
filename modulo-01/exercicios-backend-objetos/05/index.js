// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Cadastro de Aulas

const curso = {
    id: 1234,
    nome: "Lógica de Programação",
    aulas: []
};

curso.aulas.push(
    {
        indentificador: 1,
        nome_da_aula: "Introdução a programação"
    },
    {
        indentificador: 2,
        nome_da_aula: "Variáveis"
    },
    {
        indentificador: 3,
        nome_da_aula: "Condicionais"
    },
    {
        indentificador: 4,
        nome_da_aula: "Arrays"
    }
);

console.log(curso.aulas);