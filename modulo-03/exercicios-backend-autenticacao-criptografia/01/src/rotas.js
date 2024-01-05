const express = require("express");
const { cadastrarUsuario, login } = require("./controladores/usuarios");
const { validarToken } = require("./intermediarios/autenticacao");
const {
    cadastrarPokemon,
    atualizarApelidoPokemon,
    listarPokemons,
    filtrarPokemon,
    excluirPokemon,
} = require("./controladores/pokemons");

const rotas = express();

rotas.post("/usuario/cadastro", cadastrarUsuario);
rotas.post("/usuario/login", login);

rotas.use(validarToken);

rotas.post("/pokemon/cadastro", cadastrarPokemon);
rotas.patch("/pokemon/atualizar", atualizarApelidoPokemon);
rotas.get("/pokemons", listarPokemons);
rotas.get("/pokemon/:id", filtrarPokemon);
rotas.delete("/pokemon/:id", excluirPokemon);

module.exports = rotas;
