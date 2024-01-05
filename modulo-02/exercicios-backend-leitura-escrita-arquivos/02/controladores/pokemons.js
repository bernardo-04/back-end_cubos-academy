const { listarPokemons, detalharPokemon } = require("utils-playground");

const listar = async (req, res) => {
    const { pagina } = req.query;

    try {
        if (!pagina) {
            const pokemons = await listarPokemons();
            return res.json(pokemons.results);
        }

        const pokemons = await listarPokemons(Number(pagina));
        return res.status(200).json(pokemons.results);
    } catch (error) {
        return res.status(500).json(`Erro: ${error.message}`);
    }
};

const detalhar = async (req, res) => {
    const { argumento } = req.params;

    let pokemon;

    try {
        if (isNaN(Number(argumento))) {
            pokemon = await detalharPokemon(argumento);
        } else {
            pokemon = await detalharPokemon(Number(argumento));
        }

        const {
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species,
        } = pokemon;

        const retornoPokemon = {
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species,
        };

        return res.json(retornoPokemon);
    } catch (error) {
        return res.status(500).json(`Erro: ${error.message}`);
    }
};

module.exports = {
    listar,
    detalhar,
};
