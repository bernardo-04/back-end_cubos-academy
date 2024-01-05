function solucao(carta) {
  const opcoesDeCarta = ["Q", "J", "K", "A", "2", "3"];

  const indiceCartaVirada = opcoesDeCarta.findIndex((opcao) => {
    return opcao == carta;
  });

  let manilha;

  if (indiceCartaVirada === opcoesDeCarta.length - 1) {
    manilha = opcoesDeCarta[0];
  } else {
    manilha = opcoesDeCarta[indiceCartaVirada + 1];
  }

  console.log(manilha);
}
