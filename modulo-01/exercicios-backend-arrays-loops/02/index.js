// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Contando letras

const letras = ["A", "a", "B", "C", "E", "e"];

let quantidade = 0;
for (let letraE of letras) {
  if (letraE === "E" || letraE === "e") {
    quantidade++;
  }
}

if (quantidade === 0) {
  console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
  console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`);
}
