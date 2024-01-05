// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Sistema de filtro de comentários

const comentario = "Esse COVID é muito perigoso!";

const palavrasProibidas = ["covid", "pandemia"]; // array com todas as palavras que são proibidas
let comentarioAutorizado = true;

for (let palavra of palavrasProibidas) {
    if(comentario.toLowerCase().includes(palavra)){
        console.log("Comentário bloqueado por conter palavras proibidas.")
        comentarioAutorizado = false;
        break;
    }
}

if(comentarioAutorizado)
    console.log("Comentário autorizado.");