const express = require("express");
const rotasContas = require("./routes/contas");
const rotasTransacoes = require("./routes/transacoes");

const app = express();

app.use(express.json());
app.use(rotasContas);
app.use(rotasTransacoes);

app.listen(3000);
