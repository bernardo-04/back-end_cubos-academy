const express = require("express");
const {
  listarAlunos,
  obterAluno,
  cadastrarAluno,
  excluirAluno,
} = require("../controladores/recursos");
const { verificarSenha, validarId } = require("./intermediarios");

const rotas = express();
rotas.use(express.json());

rotas.get("/alunos", listarAlunos);

rotas.use(verificarSenha);

rotas.get("/alunos/:id", validarId, obterAluno);
rotas.post("/alunos", cadastrarAluno);
rotas.delete("/alunos/:id", validarId, excluirAluno);

module.exports = rotas;
