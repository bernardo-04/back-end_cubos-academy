function solucao(lista) {
  let valorTotal = 0;

  for (item of lista) {
    valorTotal += item;
  }

  let media = valorTotal / lista.length;

  console.log(media);
}
