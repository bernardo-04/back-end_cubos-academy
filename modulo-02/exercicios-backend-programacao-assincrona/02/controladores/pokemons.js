const { listarPokemons, detalharPokemon } = require("utils-playground");

const listar = async (req, res) => {
    const { pagina } = req.query;

    if (!pagina) {
        const pokemons = await listarPokemons();
        return res.json(pokemons.results);
    }

    const pokemons = await listarPokemons(Number(pagina));
    return res.json(pokemons.results);
};

const detalhar = async (req, res) => {
    const { argumento } = req.params;

    let pokemon;

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
};

module.exports = {
    listar,
    detalhar,
};
