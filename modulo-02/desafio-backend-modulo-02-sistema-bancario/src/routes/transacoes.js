const { Router } = require("express");

const {
    buscarContaValor,
    verificarExistenciaContas,
    buscarSenha,
    validarSenha,
    verificarSaldo,
    dadosEnviadosTransferencia,
    dadosEnviadosSaldoExtrato,
} = require("../middleware/transacoesMw");

const {
    depositar,
    sacar,
    transferir,
    consultarSaldo,
    consultarExtrato,
} = require("../controllers/transacoesController");

const rotas = Router();

rotas.post(
    "/transacoes/depositar",
    buscarContaValor,
    verificarExistenciaContas,
    depositar
);

rotas.post(
    "/transacoes/sacar",
    buscarContaValor,
    buscarSenha,
    verificarExistenciaContas,
    validarSenha,
    verificarSaldo,
    sacar
);

rotas.post(
    "/transacoes/transferir",
    dadosEnviadosTransferencia,
    verificarExistenciaContas,
    validarSenha,
    verificarSaldo,
    transferir
);

rotas.get(
    "/contas/saldo",
    dadosEnviadosSaldoExtrato,
    verificarExistenciaContas,
    validarSenha,
    consultarSaldo
);

rotas.get(
    "/contas/extrato",
    dadosEnviadosSaldoExtrato,
    verificarExistenciaContas,
    validarSenha,
    consultarExtrato
);

module.exports = rotas;
