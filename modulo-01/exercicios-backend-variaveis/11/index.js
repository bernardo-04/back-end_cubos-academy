// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Volume de uma esfera

let diametro = 6; // diâmetro da esfera; raio = diametro/3
const pi = Math.PI; // valor de pi, porém pi está sendo exibido como texto

const volume = 4/3 * ((diametro/2) ** 3);

console.log(`O volume de uma esfera de raio ${diametro/2} é ${volume + "pi"}`);