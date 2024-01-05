// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Calcular a distância entre dois pontos

//coordenadas do ponto 1
let ponto1_x = 1;
let ponto1_y = 1;

//coordenadas do ponto 2
let ponto2_x = 1;
let ponto2_y = 4;

let distancia = Math.sqrt(Math.pow(ponto2_x - ponto1_x, 2) + Math.pow(ponto2_y - ponto1_y, 2));

console.log(`A distância entre os dois pontos dados é: ${distancia}`);
