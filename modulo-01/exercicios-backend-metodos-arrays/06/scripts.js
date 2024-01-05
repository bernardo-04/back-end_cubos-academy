// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Encontrar dono do pet

function buscarDonoDoPet (usuarios, nomeDoPet) {
    let donoDoPet;
    let donoEncontrado = false;

    for(let item of usuarios) {
        if (item.pets.includes(nomeDoPet)) {
            donoDoPet = item.nome;
            donoEncontrado = true;
            break;
        }
    }

    if(donoEncontrado)
        console.log(`O dono(a) do(a) ${nomeDoPet} é o(a) ${donoDoPet}`);
    else
        console.log(`Que pena ${nomeDoPet}, não encontramos seu dono(a)`);
}

const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];
const nomeDoPet = "Max";

buscarDonoDoPet(usuarios, nomeDoPet);