// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Fila de atendimento

function filaAtendimento (listaPacientes, operacao, nomePaciente) {
    if (operacao.toLowerCase() === "agendar")
        listaPacientes.push(nomePaciente);
    else if (operacao.toLowerCase() === "atender")
        listaPacientes.shift();
    
    console.log(listaPacientes.join(", "))
}

const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];
const operacao = "agendar";
const nomeDoPaciente = "Lucas"; //nome do paciente para ser inserido na fila

filaAtendimento(pacientes, operacao, nomeDoPaciente);
