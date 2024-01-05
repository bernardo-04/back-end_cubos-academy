const validarId = (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  //verifica de o id é um número inteiro
  if (parseInt(Number(id), 10) === Number(id)) {
    next();
  } else {
    return res.status(400).json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  }
};

const validarDadosEnviados = (req, res, next) => {
  let { titulo, autor, ano, numPaginas } = req.body;
  ano = Number(ano);
  numPaginas = Number(numPaginas);

  if (!titulo || titulo === "" || titulo.trim() === "") {
    return res.status(400).json({
      mensagem:
        "Não foi enviado o título do livro ou o título enviado é inválido.",
    });
  }

  if (!autor || autor === "" || autor.trim() === "") {
    return res.status(400).json({
      mensagem:
        "Não foi enviado o autor do livro ou o autor enviado é inválido.",
    });
  }

  if (!ano || !(parseInt(ano, 10) === ano)) {
    return res.status(400).json({
      mensagem: "Não foi enviado o ano do livro ou o ano enviado é inválido.",
    });
  }

  if (!numPaginas || !(parseInt(numPaginas, 10) === numPaginas)) {
    return res.status(400).json({
      mensagem:
        "Não foi enviado o número de páginas do livro ou o número de páginas enviado é inválido.",
    });
  }

  next();
};

module.exports = {
  validarId,
  validarDadosEnviados,
};
