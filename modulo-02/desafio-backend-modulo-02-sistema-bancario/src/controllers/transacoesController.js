const dados = require("../data/bancodedados");
const { format } = require("date-fns");

const encontrarConta = (parametroBusca) => {
    const conta = dados.contas.find((conta) => {
        return conta.numero == parametroBusca;
    });

    return conta;
};

const depositar = async (req, res) => {
    const { numero_conta, valor } = req.body;

    const conta = encontrarConta(numero_conta);

    conta.saldo += valor;

    const registroDeposito = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta,
        valor,
    };
    dados.depositos.push(registroDeposito);

    return res.status(204).json();
};

const sacar = async (req, res) => {
    const { numero_conta, valor } = req.body;

    const conta = encontrarConta(numero_conta);

    conta.saldo -= valor;

    const registroSaque = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta,
        valor,
    };
    dados.saques.push(registroSaque);

    return res.status(204).json();
};

const transferir = async (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor } = req.body;

    const contaOrigem = encontrarConta(numero_conta_origem);

    const contaDestino = encontrarConta(numero_conta_destino);

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    const registroTransferencia = {
        data: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        numero_conta_origem,
        numero_conta_destino,
        valor,
    };

    dados.transferencias.push(registroTransferencia);

    return res.status(204).json();
};

const consultarSaldo = async (req, res) => {
    const { numero_conta } = req.query;

    const conta = encontrarConta(numero_conta);

    return res.status(200).json({ saldo: conta.saldo });
};

const consultarExtrato = async (req, res) => {
    const { numero_conta } = req.query;

    const conta = encontrarConta(numero_conta);

    const depositos = dados.depositos.filter((deposito) => {
        return deposito.numero_conta == numero_conta;
    });

    const saques = dados.saques.filter((saque) => {
        return saque.numero_conta == numero_conta;
    });

    const transferenciasEnviadas = dados.transferencias.filter(
        (transferencia) => {
            return transferencia.numero_conta_origem == numero_conta;
        }
    );

    const transferenciasRecebidas = dados.transferencias.filter(
        (transferencia) => {
            return transferencia.numero_conta_destino == numero_conta;
        }
    );

    const extrato = {
        depositos,
        saques,
        transferenciasEnviadas,
        transferenciasRecebidas,
    };

    return res.status(200).json(extrato);
};

module.exports = {
    depositar,
    sacar,
    transferir,
    consultarSaldo,
    consultarExtrato,
    encontrarConta,
};
