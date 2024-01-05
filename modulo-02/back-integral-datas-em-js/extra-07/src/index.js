const { differenceInDays } = require("date-fns");

const validarUsoPromocao = (
    inicioPromocao = new Date(),
    cliente = new Date()
) => {
    const diferencaEmDias = differenceInDays(+cliente, +inicioPromocao);

    if (diferencaEmDias <= 30) {
        return true;
    } else {
        return false;
    }
};

console.log(
    validarUsoPromocao(new Date(2018, 6, 2, 23, 0), new Date(2018, 7, 3, 10, 0))
);
