// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Sistema de formatação de dados do formulário

let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0");

nome = nome.split(" ");
nome = capitalizeArrayNome(nome).trim();

email = email.trim();

console.log(identificador);
console.log(nome);
console.log(email);

function capitalizeArrayNome (nome) {
    let nomeFormatado = "";

    for (let item of nome) {
      let capitalizeItem = item[0].toUpperCase();
      nomeFormatado += item.replace(item[0], capitalizeItem) + " ";
    }

    return nomeFormatado;
}