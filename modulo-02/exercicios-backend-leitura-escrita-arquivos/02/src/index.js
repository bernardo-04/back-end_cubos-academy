// Tratamento de exceções na API Pokemon

const express = require("express");
const roteador = require("./rotas");

const app = express();

app.use(express.json());
app.use(roteador);

app.listen(8000);