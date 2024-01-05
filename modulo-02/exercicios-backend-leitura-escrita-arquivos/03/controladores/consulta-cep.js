const fs = require("fs/promises");
const { buscarEndereco } = require("utils-playground");

const buscarCep = async (req, res) => {
    const { cep } = req.params;

    try {
        const receberListaEnderecos = await fs.readFile("./src/enderecos.json");
        const listaEnderecos = JSON.parse(receberListaEnderecos);

        const buscarCepNaLista = listaEnderecos.find((endereco) => {
            return endereco.cep.replace("-", "") === cep;
        });

        if (!buscarCepNaLista) {
            const buscarCepNaApi = await buscarEndereco(cep);

            listaEnderecos.push(buscarCepNaApi);

            await fs.writeFile(
                "./src/enderecos.json",
                JSON.stringify(listaEnderecos)
            );

            return res.status(201).json(buscarCepNaApi);
        }

        return res.status(200).json(buscarCepNaLista);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    buscarCep,
};
