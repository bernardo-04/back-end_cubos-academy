// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Fila do Banco

const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while (filaDeDentro.length < 5) {
  filaDeDentro.push(filaDeFora[0]);
  filaDeFora.shift();
}
console.log(filaDeDentro);
console.log(filaDeFora);
