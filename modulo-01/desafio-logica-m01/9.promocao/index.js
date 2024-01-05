function solucao(precos) {
  if (precos.length < 3) {
    const valorTotal = precos.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual;
    });

    console.log(valorTotal);
  } else {
    let menorPreco = precos[0];
    for (let i = 0; i < precos.length; i++) {
      if (precos[i] < menorPreco)
        menorPreco = precos[i];
    }

    let valorTotal = precos.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual;
    });
    valorTotal -= menorPreco;
    valorTotal += (menorPreco * 50) / 100;

    console.log(valorTotal);
  }
}
