// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Fila de atendimento 2.0

function agendarPaciente (listaPacientes, nomePaciente) {
    listaPacientes.push(nomePaciente);
    console.log(listaPacientes.join(", "));
}

function atenderPaciente (listaPacientes) {
    listaPacientes.shift();
    console.log(listaPacientes.join(", "));
}

function cancelarAtendimento (listaPacientes, nomePaciente) {
    listaPacientes.splice(listaPacientes.indexOf(nomePaciente), 1);
    console.log(listaPacientes.join(", "));
}

const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];
const nomeDoPaciente = "Bernardo";

agendarPaciente(pacientes, nomeDoPaciente);
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, nomeDoPaciente);
