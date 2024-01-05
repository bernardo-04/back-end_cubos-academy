// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Sistema para formatar números

const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.trim().length != 11) {
    console.log("CPF inválido");
} else {
    const cpfFormatado = formatarCPF(cpf);
    console.log(cpfFormatado);
}

if (cnpj.trim().length != 14) {
    console.log("CNPJ inválido");
} else {
    const cnpjFormatado = formatarCNPJ(cnpj);
    console.log(cnpjFormatado);
}

function formatarCPF (cpf) {
    let cpfFormatado;

    primeiraParteCPF = cpf.slice(0, 3);
    primeiraParteCPF += ".";

    segundaParteCPF = cpf.slice(3, 6);
    segundaParteCPF += ".";

    terceiraParteCPF = cpf.slice(6, 9);
    terceiraParteCPF += "-";

    ultimosDigitosCPF = cpf.slice(-2);

    cpfFormatado = primeiraParteCPF + segundaParteCPF + terceiraParteCPF + ultimosDigitosCPF;
    return cpfFormatado;
}

function formatarCNPJ (cnpj) {
    let cnpjFormatado;

    primeiraParteCNPJ = cnpj.slice(0, 2);
    primeiraParteCNPJ += ".";

    segundaParteCNPJ = cnpj.slice(2, 5);
    segundaParteCNPJ += ".";

    terceiraParteCNPJ = cnpj.slice(5, 8);
    terceiraParteCNPJ += "/";

    finalCNPJ = cnpj.slice(-6, -2) + "-" + cnpj.slice(-2);

    cnpjFormatado = primeiraParteCNPJ + segundaParteCNPJ + terceiraParteCNPJ + finalCNPJ;
    return cnpjFormatado;
}