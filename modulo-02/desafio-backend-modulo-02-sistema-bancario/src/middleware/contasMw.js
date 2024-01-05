const { banco, contas } = require("../data/bancodedados");

const validarSenha = async (req, res, next) => {
    const { senha_banco } = req.query;

    if (!senha_banco) {
        return res.status(400).json({ mensagem: "Senha não informada." });
    }

    if (senha_banco !== banco.senha) {
        return res
            .status(401)
            .json({ mensagem: "Erro na autenticação do usuário." });
    }

    next();
};

const dadosCadastro = async (req, res, next) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome) {
        return res
            .status(400)
            .json({ mensagem: "É obrigatório informar o nome." });
    }

    if (!cpf) {
        return res
            .status(400)
            .json({ mensagem: "É obrigatório informar o CPF." });
    }

    if (!data_nascimento) {
        return res
            .status(400)
            .json({ mensagem: "É obrigatório informar a data de nascimento." });
    }

    if (!telefone) {
        return res
            .status(400)
            .json({ mensagem: "É obrigatório informar o número de telefone." });
    }

    if (!email) {
        return res.status(400).json({
            mensagem: "É obrigatório informar um email.",
        });
    }

    if (!senha) {
        return res.status(400).json({
            mensagem: "É obrigatório criar uma senha para sua conta.",
        });
    }

    next();
};

const validarCpfEmail = async (req, res, next) => {
    const { cpf, email } = req.body;

    const cpfEmUso = contas.find((conta) => {
        return cpf == conta.cpf;
    });

    const emailEmUso = contas.find((conta) => {
        return email == conta.email;
    });

    if (cpfEmUso || emailEmUso) {
        return res.status(400).json({
            mensagem: "Já existe uma conta com o cpf ou email informado!",
        });
    }

    next();
};

const validarNumeroConta = async (req, res, next) => {
    const { numeroConta } = req.params;

    const buscarConta = contas.find((conta) => {
        return conta.numero == numeroConta;
    });

    if (!buscarConta) {
        return res
            .status(404)
            .json({ mensagem: "A conta informada não foi encontrada." });
    }

    next();
};

module.exports = {
    validarSenha,
    dadosCadastro,
    validarCpfEmail,
    validarNumeroConta,
};
