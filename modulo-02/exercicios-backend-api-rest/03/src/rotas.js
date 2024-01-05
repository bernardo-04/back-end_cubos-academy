const express = require("express");

const {
  listarLivros,
  consultarLivro,
  adicionarLivro,
  substituirLivro,
  alterarLivro,
  removerLivro,
} = require("../controladores/biblioteca");

const { validarId, validarDadosEnviados } = require("./intermediarios");

const rotas = express();

rotas.use(express.json());

rotas.get("/livros", listarLivros);
rotas.get("/:id", validarId, consultarLivro);

rotas.post("/livros", validarDadosEnviados, adicionarLivro);

rotas.use(validarId);
rotas.put("/livros/:id", validarDadosEnviados, substituirLivro);
rotas.patch("/livros/:id", alterarLivro);
rotas.delete("/livros/:id", removerLivro);

module.exports = rotas;
