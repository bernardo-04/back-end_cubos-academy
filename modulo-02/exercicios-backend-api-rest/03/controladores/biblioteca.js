let { livros, identificadorLivro } = require("../dados/dados");

const listarLivros = (req, res) => {
  return res.status(200).json(livros);
};

const consultarLivro = (req, res) => {
  const { id } = req.params;

  const buscarLivro = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (buscarLivro) {
    return res.status(200).json(buscarLivro);
  } else {
    return res
      .status(404)
      .json({ mensagem: "Não existe livro para o ID informado." });
  }
};

const adicionarLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  const novoLivro = {
    id: identificadorLivro,
    titulo,
    autor,
    ano,
    numPaginas,
  };
  identificadorLivro++;

  livros.push(novoLivro);

  return res.status(201).json(novoLivro);
};

const substituirLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;
  const { id } = req.params;

  const livroSubstituido = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livroSubstituido) {
    return res.status(404).json({
      mensagem: "Não existe livro a ser substituído para o ID informado.",
    });
  } else {
    livroSubstituido.titulo = titulo;
    livroSubstituido.autor = autor;
    livroSubstituido.ano = ano;
    livroSubstituido.numPaginas = numPaginas;

    return res.status(200).json({ mensagem: "Livro substituído." });
  }
};

const alterarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;
  const bodyId = req.body.id;

  const livroAlterado = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livroAlterado) {
    return res.status(404).json({
      mensagem: "Não existe livro a ser alterado para o ID informado.",
    });
  }

  if (titulo) {
    livroAlterado.titulo = titulo;
  }
  if (autor) {
    livroAlterado.autor = autor;
  }
  if (ano) {
    livroAlterado.ano = Number(ano);
  }
  if (numPaginas) {
    livroAlterado.numPaginas = Number(numPaginas);
  }
  if (bodyId) {
    return res
      .status(400)
      .json({ mensagem: "O Identificador não pode ser alterado." });
  }

  return res.status(200).json({ mensagem: "Livro alterado." });
};

const removerLivro = (req, res) => {
  const { id } = req.params;

  const livroBuscado = livros.find((livro) => {
    return livro.id === Number(id);
  });

  if (!livroBuscado) {
    return res.status(404).json({
      mensagem: "Não existe livro a ser removido para o ID informado.",
    });
  }

  livros = livros.filter((livro) => {
    return livro.id !== Number(id);
  });

  return res.status(200).json({ mensagem: "Livro removido." });
};

module.exports = {
  listarLivros,
  consultarLivro,
  adicionarLivro,
  substituirLivro,
  alterarLivro,
  removerLivro,
};
