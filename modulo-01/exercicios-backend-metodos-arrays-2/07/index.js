// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Busca de CEP

const buscarCEP = (cep, enderecos) => {
  const busca = enderecos.find((endereco) => {
    return endereco.cep === cep;
  });

  console.log(busca.rua);
};

const enderecos = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];
const cep = 00222444;

buscarCEP(cep, enderecos);
