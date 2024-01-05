// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Casos de COVID-19

let popInicial = 1000; // população inicial de pessoas infectadas
let x = 4; // quantidade de pessoas que um paciente infectado pode transmitir
let tempo = 100; // tempo percorrido

const popInfectada = popInicial * Math.pow(x, tempo/7); // quantidade de pessoas infectadas após o tempo percorrido

console.log(`Após 100 dias, o total de pessoas infectadas será de: ${popInfectada.toFixed(0)}`);