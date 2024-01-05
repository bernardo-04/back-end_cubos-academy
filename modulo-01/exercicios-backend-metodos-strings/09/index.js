// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Gerador de Nickname

const nome = "Guido Cerqueira";

console.log(geradorNickname(nome));

function geradorNickname (nome) {
    let nomeLowerCase = nome.trim().toLowerCase().split(" ");
    nomeLowerCase.unshift("@");

    let nickname = "";
    for (let item of nomeLowerCase) {
        nickname += item;
        if (nickname.length > 13) {
            nickname = nickname.slice(0, 13);
            break;
        }
    }

    return nickname;
}