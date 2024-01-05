// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Validação de e-mail

const email = "jose@cubos.academy";
const emailSemEspacos = email.trim();

if (emailSemEspacos[0] === "." || emailSemEspacos[emailSemEspacos.length - 1] === ".") {
    console.log("E-mail inválido.");
} else {
    const verificarArroba = emailSemEspacos.includes("@");
    if (!verificarArroba) {
        console.log("E-mail inválido.");
    } else {
        const verificarPonto = emailSemEspacos.includes(".");
        if (!verificarPonto) {
            console.log("E-mail inválido.");
        } else {
            console.log("E-mail válido.");
        }
    }
}

