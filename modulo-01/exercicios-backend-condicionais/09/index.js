// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Transformar nota em conceito

const nota = 8.5;

if (nota < 4) {
  console.log("O estudante obteve conceito E");
} else if (nota <= 5.9) {
  console.log("O estudante obteve conceito D");
} else if (nota <= 7.9) {
  console.log("O estudante obteve conceito C");
} else if (nota <= 8.9) {
  console.log("O estudante obteve conceito B");
} else if (nota <= 10) {
  console.log("O estudante obteve conceito A");
} else {
  console.log("Nota inválida.");
}
