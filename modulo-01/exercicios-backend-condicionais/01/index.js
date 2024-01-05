// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Pedra Papel ou Tesoura

const jogada1 = "pedra";
const jogada2 = "tesoura";

// usando apenas == faz com que o código seja "case insensitive" nas jogadas
if (jogada1 == jogada2) {
  console.log("Empate!");
} else if (jogada1 == "pedra" && jogada2 == "tesoura") {
  console.log(`Vencedor: ${jogada1}`);
} else if (jogada1 == "papel" && jogada2 == "pedra") {
  console.log(`Vencedor: ${jogada1}`);
} else if (jogada1 == "tesoura" && jogada2 == "papel") {
  console.log(`Vencedor: ${jogada1}`);
} else {
  console.log(`Vencedor: ${jogada2}`);
}
