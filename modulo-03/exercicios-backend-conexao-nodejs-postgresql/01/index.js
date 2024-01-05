const express = require("express");

const {
    cadastrarAutor,
    buscarAutor,
    cadastrarLivro,
    listarLivros,
} = require("./controllers");

const app = express();
app.use(express.json());

app.post("/autor", cadastrarAutor);

app.get("/autor/:id", buscarAutor);

app.post("/autor/:id/livro", cadastrarLivro);

app.get("/livro", listarLivros);

app.listen(3000);
