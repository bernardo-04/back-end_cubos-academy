let convidados = require("../dados/dados");

const listarConvidados = (req, res) => {
  const { nome } = req.query;

  if (!nome) {
    return res.json(convidados);
  }

  const buscarConvidado = convidados.find((convidado) => {
    return convidado.toLowerCase() === nome.toLowerCase();
  });

  if (buscarConvidado) {
    return res.status(200).json({ mensagem: "O convidado está presente." });
  } else {
    return res.json({
      mensagem: "O convidado buscado não está presente na lista.",
    });
  }
};

const adicionarConvidado = (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({
      mensagem:
        "É obrigatório informar o nome do convidado que será adicionado.",
    });
  }

  const checarConvidado = convidados.find((convidado) => {
    return convidado.toLowerCase() === nome.toLowerCase();
  });

  if (checarConvidado) {
    return res.json({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  } else {
    convidados.push(nome);
    return res.status(201).json({ mensagem: "Convidado adicionado." });
  }
};

const removerConvidado = (req, res) => {
  const { nome } = req.params;

  if (!nome) {
    return res.status(400).json({
      mensagem:
        "É obrigatório informar o nome do convidado que será removido da lista.",
    });
  }

  const verificarConvidado = convidados.find((convidado) => {
    return convidado.toLowerCase() === nome.toLowerCase();
  });

  if (verificarConvidado) {
    convidados = convidados.filter((convidado) => {
      return convidado.toLowerCase() !== nome.toLowerCase();
    });

    return res.status(200).json({ mensagem: "Convidado removido." });
  } else {
    return res.json({
      mensagem:
        "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
    });
  }
};

module.exports = {
  listarConvidados,
  adicionarConvidado,
  removerConvidado,
};
