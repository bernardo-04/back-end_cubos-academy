// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// URL amigável

const texto = "Aprenda programar do zero na Cubos Academy";

arrayURL = texto.toLowerCase().split(" ");

let urlFormatada = "";

for (item of arrayURL) {
    if (item === arrayURL[arrayURL.length - 1])
        urlFormatada += item;
    else
        urlFormatada += item + "-";
}

console.log(urlFormatada);