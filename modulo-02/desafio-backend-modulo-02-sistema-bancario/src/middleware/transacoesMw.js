const dados = require("../data/bancodedados");
const { encontrarConta } = require("../controllers/transacoesController");

const buscarContaValor = async (req, res, next) => {
    const { numero_conta, valor } = req.body;

    if (!numero_conta || !valor || valor <= 0) {
        return res.status(400).json({
            mensagem: "O número da conta e o valor são obrigatórios!",
        });
    }

    next();
};

const buscarSenha = async (req, res, next) => {
    const { senha } = req.body;

    if (!senha) {
        return res
            .status(400)
            .json({ mensagem: "A senha da conta não foi informada." });
    }

    next();
};

const verificarExistenciaContas = async (req, res, next) => {
    const numero_conta_body = req.body.numero_conta;
    const numero_conta_query = req.query.numero_conta;

    const { numero_conta_origem, numero_conta_destino } = req.body;

    let conta;
    if (numero_conta_body) {
        conta = encontrarConta(numero_conta_body);
    } else if (numero_conta_query) {
        conta = encontrarConta(numero_conta_query);
    } else if (numero_conta_origem && numero_conta_destino) {
        const contaOrigem = encontrarConta(numero_conta_origem);
        const contaDestino = encontrarConta(numero_conta_destino);

        if (!contaOrigem) {
            return res
                .status(404)
                .json({ mensagem: "A conta de origem não foi encontrada." });
        }
        if (!contaDestino) {
            return res
                .status(404)
                .json({ mensagem: "A conta de destino não foi encontrada." });
        }

        return next();
    }

    if (!conta) {
        return res
            .status(404)
            .json({ mensagem: "A conta não foi encontrada." });
    }

    next();
};

const validarSenha = async (req, res, next) => {
    const numero_conta_body = req.body.numero_conta;
    const { numero_conta_origem } = req.body;
    const senha_body = req.body.senha;

    const numero_conta_query = req.query.numero_conta;
    const senha_query = req.query.senha;

    let conta;
    if (numero_conta_body) {
        conta = encontrarConta(numero_conta_body);
    } else if (numero_conta_origem) {
        conta = encontrarConta(numero_conta_origem);
    } else if (numero_conta_query) {
        conta = encontrarConta(numero_conta_query);
    }

    if (numero_conta_query) {
        if (senha_query != conta.usuario.senha) {
            return res
                .status(401)
                .json({ mensagem: "Erro na autenticação do usuário." });
        }
    }

    if (numero_conta_body || numero_conta_origem) {
        if (senha_body != conta.usuario.senha) {
            return res
                .status(401)
                .json({ mensagem: "Erro na autenticação do usuário." });
        }
    }

    next();
};

const verificarSaldo = async (req, res, next) => {
    const { numero_conta, numero_conta_origem, valor } = req.body;

    let conta;
    if (numero_conta) {
        conta = encontrarConta(numero_conta);
    } else if (numero_conta_origem) {
        conta = encontrarConta(numero_conta_origem);
    }

    if (valor > conta.saldo) {
        return res.status(200).json({
            mensagem: "Saldo insuficiente para realizar a transação.",
        });
    }

    next();
};

const dadosEnviadosTransferencia = async (req, res, next) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } =
        req.body;

    if (!numero_conta_origem) {
        return res.status(400).json({
            mensagem:
                "É necessário informar o número da conta de origem da transferência.",
        });
    }

    if (!numero_conta_destino) {
        return res.status(400).json({
            mensagem:
                "É necessário informar o número da conta de destino da transferência.",
        });
    }

    if (!valor) {
        return res
            .status(400)
            .json({ mensagem: "Informe o valor da transferência." });
    }

    if (!senha) {
        return res.status(400).json({
            mensagem:
                "Não foi informada a senha da conta de origem da transferência.",
        });
    }

    next();
};

const dadosEnviadosSaldoExtrato = async (req, res, next) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(400).json({
            mensagem: "Não foi informado o número e/ou a senha da conta.",
        });
    }

    next();
};

module.exports = {
    buscarContaValor,
    buscarSenha,
    verificarExistenciaContas,
    validarSenha,
    verificarSaldo,
    dadosEnviadosTransferencia,
    dadosEnviadosSaldoExtrato,
};
