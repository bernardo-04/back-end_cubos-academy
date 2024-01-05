const imoveis = require("../dados/imoveis");

const get = (req, res) => {
  res.send(imoveis);
};

const getPorld = (req, res) => {
  const { id } = req.params;
  const buscarImovel = imoveis.find((imovel) => {
    return imovel.id === Number(id);
  });

  res.send(buscarImovel);
};

module.exports = {
  get,
  getPorld,
};
