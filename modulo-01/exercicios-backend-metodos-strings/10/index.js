// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Validação de arquivos

const nomeArquivo = "Foto da Familia.pdf";

let extensaoArquivo = nomeArquivo.slice(nomeArquivo.indexOf(".") + 1);

if (extensaoArquivo === "jpg" || extensaoArquivo === "jpeg" || extensaoArquivo === "gif" || extensaoArquivo === "png") {
    console.log("Arquivo válido.");
} else {
    console.log("Arquivo inválido.");
}