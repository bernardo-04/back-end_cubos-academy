const express = require("express");
const { listar, detalhar } = require("../controladores/pokemons");
const roteador = express();

roteador.get("/pokemon", listar);
roteador.get("/pokemon/:argumento", detalhar);

module.exports = roteador;
