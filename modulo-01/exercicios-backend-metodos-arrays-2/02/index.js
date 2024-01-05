// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Verificando limite de caracteres

const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const palavraInvalida = palavras.find((palavra) => {
  return palavra.length > 5;
});

if (palavraInvalida != undefined) {
  console.log("Existe palavra inválida.");
} else {
  console.log("Array validado.");
}
