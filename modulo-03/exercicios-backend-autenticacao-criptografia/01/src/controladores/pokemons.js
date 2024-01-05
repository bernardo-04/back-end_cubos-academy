const pool = require("../conexao");
const jwt = require("jsonwebtoken");
const senhaJwt = require("../jwt-senha");

const cadastrarPokemon = async (req, res) => {
    const { nome, apelido, habilidades, imagem } = req.body;

    if (!nome || !habilidades) {
        return res.status(400).json({
            mensagem: "Preencha todos os campos para cadastrar um pokemon",
        });
    }

    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id: usuario_id } = jwt.verify(token, senhaJwt);

    try {
        const pokemonCadastrado = await pool.query(
            `insert into pokemons (usuario_id, nome, apelido, habilidades, imagem) values ($1, $2, $3, $4, $5) returning *`,
            [usuario_id, nome, apelido, habilidades, imagem]
        );

        return res.status(201).json(pokemonCadastrado.rows[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

const atualizarApelidoPokemon = async (req, res) => {
    const { id, novoApelido } = req.body;

    if (!id || !novoApelido) {
        return res.status(400).json({
            mensagem:
                "As informações fornecidas não são suficientes para atualizar o Pokémon",
        });
    }

    try {
        const { rows, rowCount } = await pool.query(
            `select * from pokemons where id = $1`,
            [id]
        );

        if (rowCount < 1) {
            return res.status(404).json({ mensagem: "Pokémon não encontrado" });
        }

        const atualizarPokemon = await pool.query(
            `update pokemons set apelido = $1 where id = $2 returning *`,
            [novoApelido, id]
        );

        return res.status(200).json(atualizarPokemon.rows[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

const listarPokemons = async (req, res) => {
    try {
        const { rows } = await pool.query(
            `select * from pokemons order by id asc`
        );

        const listaDePokemons = await Promise.all(
            rows.map(async (pokemon) => {
                const { authorization } = req.headers;
                const token = authorization.split(" ")[1];
                const { id: idUsuario } = jwt.verify(token, senhaJwt);
                const usuario = await pool.query(
                    `select nome from usuarios where id = $1`,
                    [idUsuario]
                );

                const pokemonFormatado = {
                    id: pokemon.id,
                    usuario: usuario.rows[0].nome,
                    nome: pokemon.nome,
                    apelido: pokemon.apelido,
                    habilidades: pokemon.habilidades.split(", "),
                    imagem: pokemon.imagem,
                };

                return pokemonFormatado;
            })
        );

        return res.status(200).json(listaDePokemons);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

const filtrarPokemon = async (req, res) => {
    const { id } = req.params;

    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id: usuario_id } = jwt.verify(token, senhaJwt);

    try {
        const { rows } = await pool.query(
            `select * from pokemons where id = $1`,
            [id]
        );

        const { rows: usuario } = await pool.query(
            `select nome from usuarios where id = $1`,
            [usuario_id]
        );
        rows[0].usuario = usuario[0].nome;
        rows[0].habilidades = rows[0].habilidades.split(", ");

        const { usuario_id: _, ...pokemon } = rows[0];

        return res.status(200).json(pokemon);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

const excluirPokemon = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query(`delete from pokemons where id = $1`, [id]);

        return res
            .status(200)
            .json({ mensagem: "Pokémon deletado com sucesso" });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
};

module.exports = {
    cadastrarPokemon,
    atualizarApelidoPokemon,
    listarPokemons,
    filtrarPokemon,
    excluirPokemon,
};
