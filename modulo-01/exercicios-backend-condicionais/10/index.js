// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Identificando Caracteres

const caractere = "O";

if (parseInt(caractere) || caractere == 0) {
  console.log("Número");
} else if (
  caractere === "A" ||
  caractere === "E" ||
  caractere === "I" ||
  caractere === "O" ||
  caractere === "U"
) {
  console.log("Vogal maiúscula");
} else if (
  caractere === "a" ||
  caractere === "e" ||
  caractere === "i" ||
  caractere === "o" ||
  caractere === "u"
) {
  console.log("Vogal minúscula");
} else {
  console.log("Consoante");
}