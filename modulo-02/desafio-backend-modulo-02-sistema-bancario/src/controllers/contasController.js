const dados = require("../data/bancodedados");

const listarContas = async (req, res) => {
    return res.status(200).json(dados.contas);
};

const criarConta = async (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const novaConta = {
        numero: dados.identificadorConta,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha,
        },
    };
    dados.identificadorConta++;

    dados.contas.push(novaConta);

    return res.status(204).json();
};

const atualizarUsuario = async (req, res) => {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const conta = dados.contas.find((conta) => {
        return conta.numero == numeroConta;
    });

    conta.usuario = {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha,
    };

    return res.status(204).json();
};

const excluirConta = async (req, res) => {
    const { numeroConta } = req.params;

    const conta = dados.contas.find((conta) => {
        return conta.numero == numeroConta;
    });

    if (conta.saldo == 0) {
        dados.contas.splice(dados.contas.indexOf(conta), 1);

        return res.status(204).json();
    } else {
        return res.status(400).json({
            mensagem: "A conta só pode ser removida se o saldo for zero",
        });
    }
};

module.exports = {
    listarContas,
    criarConta,
    atualizarUsuario,
    excluirConta,
};
