// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy Módulo 2
// ControladorDeRodadas.com

const express = require("express");
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0;

app.get("/", (requisicao, resposta) => {
  const jogador = jogadores[i];
  if (i === jogadores.length - 1)
    i = 0;
  else
    i++;
  resposta.send(jogador);
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});