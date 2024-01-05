const express = require("express");
const {
  listarConvidados,
  adicionarConvidado,
  removerConvidado,
} = require("../controladores/controladores");

const rotas = express();

rotas.use(express.json());

rotas.get("/convidados", listarConvidados);
rotas.post("/convidados", adicionarConvidado);
rotas.delete("/convidados/:nome", removerConvidado);

module.exports = rotas;
