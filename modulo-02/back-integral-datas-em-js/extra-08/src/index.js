const { format } = require("date-fns");

const date = new Date();

//formata data no formato "05 de outubro de 2020"
const formatarDataA = (date) => {
    const resultado = format(date, "dd 'de' MMMM 'de' yyyy");

    console.log(resultado);
    return resultado;
};

//formata data no formato "05/10/2020"
const formatarDataB = (date) => {
    const resultado = format(date, "dd/MM/yyyy");

    console.log(resultado);
    return resultado;
};

//formata a data no formato "5 out"
const formatarDataC = (date) => {
    const resultado = format(date, "d MMM");

    console.log(resultado);
    return resultado;
};

//formata a data no formato "05 out 2020"
const formatarDataD = (date) => {
    const resultado = format(date, "dd MMM yyyy");

    console.log(resultado);
    return resultado;
};

//formata a data no formato "05 de out de 2020"
const formatarDataE = (date) => {
    const resultado = format(date, "dd 'de' MMM 'de' yyyy");

    console.log(resultado);
    return resultado;
};

//formata a data no formato "05/out"
const formatarDataF = (date) => {
    const resultado = format(date, "dd/MMM");

    console.log(resultado);
    return resultado;
};

formatarDataA(date);
formatarDataB(date);
formatarDataC(date);
formatarDataD(date);
formatarDataE(date);
formatarDataF(date);
