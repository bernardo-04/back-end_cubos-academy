function solucao(numeros) {
  const jogadores = numeros.length; //quantidade de jogadores
  const somaNumeros = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  });
  let posicaoSorteada;

  if (somaNumeros % jogadores === 0)
    posicaoSorteada = jogadores; //ultimo jogador
  else
    posicaoSorteada = somaNumeros % jogadores;

  console.log(posicaoSorteada);
}
