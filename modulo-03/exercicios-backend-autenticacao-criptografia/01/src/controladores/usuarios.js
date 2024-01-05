const pool = require("../conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../jwt-senha");

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res
            .status(400)
            .json({ mensagem: "Prrencha todos os campos para se cadastrar" });
    }

    try {
        const senhaCrypt = await bcrypt.hash(senha, 10);

        const usuarioCadastrado = await pool.query(
            `insert into usuarios (nome, email, senha) values ($1, $2, $3) returning nome, email`,
            [nome, email, senhaCrypt]
        );

        return res.status(201).json(usuarioCadastrado.rows[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const { rows, rowCount } = await pool.query(
            `select * from usuarios where email = $1`,
            [email]
        );

        if (rowCount < 1) {
            return res
                .status(401)
                .json({ mensagem: "Email ou senha inválidos" });
        }

        const validarSenha = await bcrypt.compare(senha, rows[0].senha);

        if (!validarSenha) {
            return res
                .status(401)
                .json({ mensagem: "Email ou senha inválidos" });
        }

        const token = jwt.sign({ id: rows[0].id }, senhaJwt, {
            expiresIn: "1h",
        });

        const { senha: _, ...usuario } = rows[0];

        return res.status(200).json({
            usuario,
            token,
        });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

module.exports = {
    cadastrarUsuario,
    login,
};
