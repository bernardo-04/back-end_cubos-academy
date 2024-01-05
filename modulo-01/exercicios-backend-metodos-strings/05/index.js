// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Esconder número do cartão de crédito

const numeroCartao = "1111222233334444";

if (numeroCartao.trim().length != 16) {
    console.log("Número de cartão inválido.");
} else {
    let numeroCartaoOculto = numeroCartao;

    for (let i = 0; i < numeroCartao.length; i++) {
        if (i >= 4 && i < 12) {
            numeroCartaoOculto = numeroCartaoOculto.replace(numeroCartaoOculto[i], "*");
        }
    }
    
    console.log(numeroCartaoOculto);
}