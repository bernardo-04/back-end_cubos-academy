function solucao(texto) {
  const arrayTexto = texto.trim().split(" ");
  const arraySemVazios = arrayTexto.filter((elementoDoArray) => {
    return elementoDoArray != "";
  });

  let quantidade = arraySemVazios.length;

  console.log(quantidade);
}
