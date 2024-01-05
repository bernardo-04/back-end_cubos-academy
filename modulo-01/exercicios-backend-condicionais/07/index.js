// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Isenção de Impostos

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30000; //em reais
const refRendimentos = 28559.7; // valor referência dos rendimentos para verificar se a pessoa é isenta ou não

if (aposentada || portadoraDeDoenca) {
  console.log("ISENTA");
} else if (totalDeRendimentos <= refRendimentos) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
  console.log("PEGA LEAO");
}