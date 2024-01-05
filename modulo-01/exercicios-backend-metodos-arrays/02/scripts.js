// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Divisão de grupos

function dividirGrupos (nomes, tamanho) {
    let grupos = [];
    let startIndex = 0;
    let endIndex = tamanho;

    for (let i = 0; i < nomes.length / tamanho; i++) { //forma os grupos completos
        grupos.push(nomes.splice(startIndex, endIndex));
    }
    grupos.push(nomes.splice(startIndex)); //último push que forma os grupos incompletos

    for(let i = 0; i < grupos.length; i++) { //exibe os grupos
        if(grupos[i] != "")
            console.log(`Grupo ${i+1}: ${grupos[i]}`);
    }
}

const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];
const tamanhoDoGrupo = 4;

dividirGrupos(nomes, tamanhoDoGrupo);