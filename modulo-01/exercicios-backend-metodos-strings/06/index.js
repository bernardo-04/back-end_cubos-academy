// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Formatar número de celular

function formatarCelularSem9 (celular) {
    let inicioCelular = "9 " + celular.slice(0, 4);

    let finalCelular = celular.slice(-4);
    finalCelular = "-" + finalCelular;

    const celularFormatado = inicioCelular + finalCelular;
    return celularFormatado;
}

const celular = 99918888;
const celularString = celular.toString();

let celularFormatado;

if (celularString.length === 8) {
    celularFormatado = formatarCelularSem9(celularString);

} else if (celularString.slice(2).length === 8) {
    const ddd = celularString.slice(0, 2);
    celularFormatado = `(${ddd}) ${formatarCelularSem9(celularString.slice(2))}`;

} else if (celularString.length === 9) {
    const nove = celularString[0];
    celularFormatado = `${nove} ${celularString.slice(1, 5)}-${celularString.slice(5)}`;

} else {
    const ddd = celularString.slice(0, 2);
    const nove = celularString[2];
    const numeroFormatado = `${celularString.slice(3, 7)}-${celularString.slice(7)}`;
    celularFormatado = `(${ddd}) ${nove} ${numeroFormatado}`;
}

console.log(celularFormatado);