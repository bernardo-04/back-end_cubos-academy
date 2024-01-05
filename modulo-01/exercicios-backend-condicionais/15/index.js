// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Nome para exibição

const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido){
    console.log(apelido);
} else if (sobrenome){
    console.log(`${primeiroNome} ${sobrenome}`);
} else {
    console.log(primeiroNome);
}