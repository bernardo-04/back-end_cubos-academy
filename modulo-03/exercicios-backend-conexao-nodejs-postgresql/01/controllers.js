const pool = require("./dbconfig");

const cadastrarAutor = async (req, res) => {
    const { nome, idade } = req.body;

    if (!nome) {
        return res.json({ mensagem: "O campo nome é obrigatório" });
    }

    try {
        const query = `
        insert into autores
        (nome, idade)
        values
        ($1, $2)
        `;
        const params = [nome, idade];

        await pool.query(query, params);

        const queryAutor = `
            select * from autores order by id desc limit 1
        `;

        const autorCadastrado = await pool.query(queryAutor);
        return res.json(autorCadastrado.rows);
    } catch (error) {
        console.log(error.message);
    }
};

const buscarAutor = async (req, res) => {
    const { id } = req.params;

    try {
        const params = [id];

        const query = `
            select * from autores where id = $1
        `;
        const buscarAutor = await pool.query(query, params);

        if (buscarAutor.rows == "") {
            return res.json({ mensagem: "Autor não encontrado" });
        }

        const queryLivros = `
            select l.id, l.nome, l.genero, l.editora, l.publicacao
            from livros l join autores a on l.autor_id = a.id
        `;
        const livrosAutor = await pool.query(queryLivros);

        return res.json({
            ...buscarAutor.rows[0],
            livros: livrosAutor.rows,
        });
    } catch (error) {
        console.log(error.message);
    }
};

const cadastrarLivro = async (req, res) => {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    if (!nome) {
        return res.json({ mensagem: "O campo nome é obrigatório" });
    }

    try {
        const query = `
            insert into livros
            (nome, genero, editora, publicacao, autor_id)
            values
            ($1, $2, $3, $4, $5)
        `;
        const params = [nome, genero, editora, data_publicacao, id];

        await pool.query(query, params);

        const queryLivro = `
            select id, nome, genero, editora, publicacao
            from livros order by id desc limit 1
        `;

        const livroCadastrado = await pool.query(queryLivro);
        return res.json(livroCadastrado.rows);
    } catch (error) {
        console.log(error.message);
    }
};

const listarLivros = async (req, res) => {
    try {
        const query = `
            select 
            l.id, 
            l.nome, 
            l.genero, 
            l.editora, 
            l.publicacao,
            json_build_object('id', a.id, 'nome', a.nome, 'idade', a.idade) as autor
            from livros l join autores a on l.autor_id = a.id; 
        `;
        const livros = await pool.query(query);
        return res.json(livros.rows);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    cadastrarAutor,
    buscarAutor,
    cadastrarLivro,
    listarLivros,
};
