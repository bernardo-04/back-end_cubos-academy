// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Validando lista de compras

const lista = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const listaPossuiProdutoProibido = lista.some((produto) => {
    return produto === "cerveja" || produto === "vodka";
});

if(!listaPossuiProdutoProibido) {
    console.log("Tudo certo, vamos as compras!");
} else {
    console.log("Revise sua lista, João. Possui bebida com venda proibida!");
}