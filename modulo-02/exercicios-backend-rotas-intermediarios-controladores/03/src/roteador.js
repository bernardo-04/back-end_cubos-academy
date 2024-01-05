const express = require("express");
const app = express();

const { get, getPorld } = require("./controladores/imoveis");

app.get("/imoveis", get);
app.get("/imoveis/:id", getPorld);

app.listen(8000);
