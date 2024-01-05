const { set, isSaturday, isSunday } = require("date-fns");

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

    if (isSaturday(+cliente) || isSunday(+cliente)) {
        return false;
    } else {
        if (+cliente >= +aberturaLoja && +cliente <= +fechamentoLoja) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
