const { alunos } = require("../dados/bancoDeDados");

const verificarSenha = (req, res, next) => {
  const { senha } = req.query;

  if (senha === "cubos123") {
    next();
  } else {
    res.status(401).json({
      mensagem: "Erro 401 - Autenticação invalidada por senha incorreta.",
    });
  }
};

const validarId = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "O ID deve ser um número válido." });
  } else {
    next();
  }
};

module.exports = {
  verificarSenha,
  validarId,
};
