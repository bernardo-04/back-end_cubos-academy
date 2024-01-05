// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy Módulo 2
// RoundControllerEvolution.com

const express = require("express");
const app = express();

const {
  jogadorAtual,
  removerJogador,
  adicionarJogador,
} = require("../controladores/jogo");

const { validarNome } = require("./intermediarios");

app.get("/", jogadorAtual);
app.get("/remover", removerJogador);

app.use(validarNome);

app.get("/adicionar", adicionarJogador);

app.listen(8000);
