const produtos = require("../bancodedados/produtos");
const { getStateFromZipcode } = require("utils-playground");

const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos);
};

const detalharProduto = async (req, res) => {
    let { idProduto } = req.params;

    const buscarProduto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    if (!buscarProduto) {
        return res.status(404).json({ mensagem: "Produto não encontrado." });
    }

    return res.status(200).json(buscarProduto);
};

const calcularFrete = async (req, res) => {
    const { idProduto, cep } = req.params;
    const sudeste = ["SP", "RJ"];
    const nordeste = ["BA", "SE", "AL", "PE", "PB"];

    let frete;

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado." });
    }

    try {
        const estado = await getStateFromZipcode(cep);

        if (sudeste.includes(estado)) {
            frete = (produto.valor * 15) / 100;
        } else if (nordeste.includes(estado)) {
            frete = (produto.valor * 10) / 100;
        } else {
            frete = (produto.valor * 12) / 100;
        }

        const resultado = {
            produto,
            estado,
            frete,
        };

        return res.status(200).json(resultado);
    } catch (error) {
        return res.status(500).json(`Erro: ${error.message}`);
    }
};

module.exports = {
    listarProdutos,
    detalharProduto,
    calcularFrete,
};
