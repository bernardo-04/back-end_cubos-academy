// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Encontre o 10

const numeros = [54, 22, 14, 87, 10, 284];

let encontrado = false;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    console.log(`Número 10 encontrado na posição ${i}.`);
    encontrado = true;
  }
}

if (!encontrado) {
  console.log(`-1`);
}
