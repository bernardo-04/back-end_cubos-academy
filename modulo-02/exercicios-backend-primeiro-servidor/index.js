// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy Módulo 2
// ControladorDeRodadas.com

const express = require("express");
const app = express();

const time = () => {
  const contador = setInterval(() => {
    segundos++;
  }, 1000);
  return contador;
};

let segundos = 0;
let minutos = 0;

app.get("/", (requisicao, resposta) => {
    resposta.send(`${segundos}`);
});

app.get("/iniciar", (requisicao, resposta) => {
  time();
  resposta.send("Cronômetro iniciado!");
});

app.listen(8000, () => {
  console.log("Servidor iniciado na porta 8000");
});
