const pool = require("../conexao");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../jwt-senha");

const validarToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res
            .status(401)
            .json({ mensagem: "Erro na autenticação do usuário" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { id } = jwt.verify(token, senhaJwt);
        const { rows, rowCount } = await pool.query(
            `select * from usuarios where id = $1`,
            [id]
        );

        if (rowCount < 1) {
            return res.status(401).json("Erro na autenticação do usuário");
        }

        req.usuario = rows[0];

        next();
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

module.exports = {
    validarToken,
};
