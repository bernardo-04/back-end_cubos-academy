// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Montanha Russa muito assustadora

const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
  console.log("ACESSO NEGADO");
} else if (idade < 18 || ehEstudante === true) {
  console.log("10 reais");
} else {
  console.log("20 reais");
}
