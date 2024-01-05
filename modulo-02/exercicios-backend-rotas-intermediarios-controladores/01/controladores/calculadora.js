const somar = (req, res) => {
  const { num1, num2 } = req.query;
  const soma = Number(num1) + Number(num2);

  res.send(`${soma}`);
};

const subtrair = (req, res) => {
  const { num1, num2 } = req.query;
  const subtracao = Number(num1) - Number(num2);

  res.send(`${subtracao}`);
};

const multiplicar = (req, res) => {
  const { num1, num2 } = req.query;
  const multiplicacao = Number(num1) * Number(num2);

  res.send(`${multiplicacao}`);
};

const dividir = (req, res) => {
  const { num1, num2 } = req.query;
  const divisao = Number(num1) / Number(num2);

  res.send(`${divisao}`);
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
};
