const jogadores = require("../src/bancoDeDados");
const { capitalizeString } = require("./auxiliar");

let contador = 0;
const jogadorAtual = (req, res) => {
  const jogador = jogadores[contador];

  if (contador === jogadores.length - 1) {
    contador = 0;
  } else {
    contador++;
  }

  res.send(`É a vez de ${jogador} jogar!`);
};

const removerJogador = (req, res) => {
  const { indice } = req.query;

  if (!jogadores[Number(indice)]) {
    res.send(
      `Não existe jogador no índice informado (${indice}) para ser removido.`
    );
  }

  jogadores.splice(Number(indice), 1);

  res.send(jogadores);
};

const adicionarJogador = (req, res) => {
  const { nome, indice } = req.query;

  if (!indice) {
    jogadores.push(capitalizeString(nome));

    res.send(jogadores);
  } else {
    if (indice > jogadores.length - 1 || indice < 0) {
      res.send(
        `O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`
      );
    } else {
      jogadores.splice(indice, 0, capitalizeString(nome));

      res.send(jogadores);
    }
  }
};

module.exports = {
  jogadorAtual,
  removerJogador,
  adicionarJogador,
};
