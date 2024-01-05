// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy Módulo 2
// Cronômetro Online

const express = require("express");
const app = express();

let cronometro;
let cronometroParado = false;

const tempo = {
  minutos: 0,
  segundos: 0,
};

const contador = () => {
  let contador = setInterval(() => {
    if (!cronometroParado) {
      if (tempo.segundos === 60) {
        tempo.minutos++;
        tempo.segundos = 0;
      } else {
        tempo.segundos++;
      }
      return contador;
    }
  }, 1000);
};

app.get("/", (requisicao, resposta) => {
  resposta.send(
    `Tempo atual do cronômetro: ${tempo.minutos} minutos e ${tempo.segundos} segundos`
  );
});

app.get("/iniciar", (requisicao, resposta) => {
  cronometro = contador();
  resposta.send("Cronômetro iniciado!");
});

app.get("/pausar", (requisicao, resposta) => {
  cronometroParado = true;
  resposta.send("Cronômetro pausado!");
});

app.get("/continuar", (requisicao, resposta) => {
  cronometroParado = false;
  resposta.send("Cronômetro continuando!");
});

app.get("/zerar", (requisicao, resposta) => {
  tempo.minutos = 0;
  tempo.segundos = 0;
  resposta.send("Cronômetro zerado!");
});

app.listen(8000, () => {
  console.log("Servidor iniciado na porta 8000");
});
