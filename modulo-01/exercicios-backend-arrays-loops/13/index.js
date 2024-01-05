// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Verificando disjuntores

const disjuntores = [false, false, true, false, false, true, false, false];

console.log(`Disjuntores ligados:`);

for (let i = 0; i < disjuntores.length; i++) {
  if (disjuntores[i]) {
    console.log(`\t${i}`);
  }
}
