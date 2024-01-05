const express = require("express");
const { buscarCep } = require("../controladores/consulta-cep");
const rotas = express();

rotas.get("/enderecos/:cep", buscarCep);

module.exports = rotas;
