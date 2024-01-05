// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Dando nome as pedras

const ladoA = 3;
const ladoB = 3;

if (ladoA === ladoB) {
  const nomeBucha = ladoA;
  if (nomeBucha === 0) {
    console.log("Sim, essa pedra é uma bucha de Branco!");
  } else if (nomeBucha === 1) {
    console.log("Sim, essa pedra é uma bucha de Ás!");
  } else if (nomeBucha === 2) {
    console.log("Sim, essa pedra é uma bucha de Duque!");
  } else if (nomeBucha === 3) {
    console.log("Sim, essa pedra é uma bucha de Terno!");
  } else if (nomeBucha === 4) {
    console.log("Sim, essa pedra é uma bucha de Quadra!");
  } else if (nomeBucha === 5) {
    console.log("Sim, essa pedra é uma bucha de Quina!");
  } else if (nomeBucha === 6) {
    console.log("Sim, essa pedra é uma bucha de Sena!");
  }
} else {
  console.log("Não, essa pedra não é uma bucha.");
}
