// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Sistema para biblioteca

const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

const posicaoLivro = livros.findIndex((livro) => {
    return livro.toLowerCase() === nomeDoLivro.toLowerCase();
});

console.log(`O livro ${nomeDoLivro} está na posição ${posicaoLivro + 1}.`);