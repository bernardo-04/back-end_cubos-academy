// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtro de usuários

const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

const programadoresMaioresDe20 = pessoas.filter((pessoa) => {
    return pessoa.profissao.toLowerCase() === "programador" && pessoa.idade > 20;
});

console.log("Programadores maiores de 20 anos:");
console.log(programadoresMaioresDe20);

const jornalistasMaioresDe30 = pessoas.filter((pessoa) => {
    return pessoa.profissao.toLowerCase() === "jornalista" && pessoa.idade > 30;
});

console.log("Jornalistas maiores de 30 anos:");
console.log(jornalistasMaioresDe30);

const jovensJornalistasProgramadores = pessoas.filter((pessoa) => {
    return (pessoa.profissao.toLowerCase() === "programador" || pessoa.profissao.toLowerCase() === "jornalista") && pessoa.idade <= 29;
});

console.log("Jornalistas, Programadores e Programadoras Jovens:");
console.log(jovensJornalistasProgramadores);