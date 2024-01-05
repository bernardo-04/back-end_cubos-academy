const { differenceInMilliseconds } = require("date-fns");

const validarUsoPromocao = (
    inicioPromocao = new Date(),
    cliente = new Date()
) => {
    const diferencaTempoEmMillisegundos = differenceInMilliseconds(
        +cliente,
        +inicioPromocao
    );

    const diferencaTempoEmHoras =
        diferencaTempoEmMillisegundos / 1000 / 60 / 60;

    if (diferencaTempoEmHoras <= 24) {
        return true;
    } else {
        return false;
    }
};

// Teste após 24 horas e 1 minuto
console.log(
    validarUsoPromocao(new Date(2014, 6, 2, 6, 50), new Date(2014, 6, 3, 6, 51))
);
