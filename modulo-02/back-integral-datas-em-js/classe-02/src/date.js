const registros = require("./registros.js");
const { isBefore } = require("date-fns");

registros.sort((date1, date2) => {
    const resultado = isBefore(
        new Date(date1.registered),
        new Date(date2.registered)
    );

    if (!resultado) {
        return 1;
    } else {
        return -1;
    }
});

console.log(registros);
