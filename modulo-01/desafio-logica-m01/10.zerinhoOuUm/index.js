function solucao(jogadores) {
  let ocorrencia0 = 0;
  let ocorrencia1 = 0;

  for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].jogada === 0)
      ocorrencia0++;
    else
      ocorrencia1++;
  }

  if (ocorrencia0 > 1 && ocorrencia1 > 1) {
    console.log("NINGUEM");
  } else if (ocorrencia0 === 1) {
    for (let jogador of jogadores)
      if (jogador.jogada === 0)
        console.log(jogador.nome);
  } else {
    for (let jogador of jogadores)
      if (jogador.jogada === 1)
        console.log(jogador.nome);
  }
}
