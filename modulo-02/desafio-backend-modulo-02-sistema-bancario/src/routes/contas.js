const { Router } = require("express");

const {
    validarSenha,
    dadosCadastro,
    validarCpfEmail,
    validarNumeroConta,
} = require("../middleware/contasMw");

const {
    listarContas,
    criarConta,
    atualizarUsuario,
    excluirConta,
} = require("../controllers/contasController");

const rotas = Router();

rotas.get("/contas", validarSenha, listarContas);
rotas.post("/contas", dadosCadastro, validarCpfEmail, criarConta);

rotas.put(
    "/contas/:numeroConta/usuario",
    dadosCadastro,
    validarNumeroConta,
    validarCpfEmail,
    atualizarUsuario
);

rotas.delete("/contas/:numeroConta", validarNumeroConta, excluirConta);

module.exports = rotas;
