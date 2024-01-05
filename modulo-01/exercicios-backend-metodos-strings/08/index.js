// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Remover pontuação

const cpf = "011.022.033-44";

const cpfSemPontuacao = removerPontuacao(cpf);
console.log(cpfSemPontuacao);

function removerPontuacao (cpf) {
    for (let i = 0; i < cpf.length; i++) {
        if (cpf[i] === "." || cpf[i] === "-" || cpf[i] === "/")
            cpf = cpf.replace(cpf[i], "");
    }
    return cpf;
}