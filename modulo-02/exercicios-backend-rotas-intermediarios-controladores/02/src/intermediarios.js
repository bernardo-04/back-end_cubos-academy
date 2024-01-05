const validarNome = (req, res, next) => {
  const { nome } = req.query;
  if (nome) {
    next();
  } else {
    res.send("Não foi informado o parâmetro nome.");
  }
};

module.exports = {
  validarNome,
};
