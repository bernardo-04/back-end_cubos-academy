const { set } = require("date-fns");

const taAberto = (cliente = new Date()) => {
    const aberturaLoja = set(cliente, {
        hours: 8,
        minutes: 0,
        seconds: 0,
    });
    const fechamentoLoja = set(cliente, {
        hours: 18,
        minutes: 0,
        seconds: 0,
    });

    if (+cliente >= +aberturaLoja && +cliente <= +fechamentoLoja) {
        return true;
    } else {
        return false;
    }
};

console.log(taAberto(new Date(2015, 1, 1, 12)));
console.log(taAberto(new Date(2015, 1, 1, 2)));
