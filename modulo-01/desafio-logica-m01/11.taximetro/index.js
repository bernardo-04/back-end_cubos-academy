function solucao(min, km) {
  const precoKm = 70;
  const precoKmDesconto = 50;

  const precoMin = 50;
  const precoMinDesconto = 30;

  //valor dos minutos da viagem
  let valorMinutos;
  if (min <= 20)
    valorMinutos = min * precoMin;
  else
    valorMinutos = 20 * precoMin + (min - 20) * precoMinDesconto;

  //valor dos km da viagem
  let valorKm;
  if (km <= 10)
    valorKm = km * precoKm;
  else
    valorKm = 10 * precoKm + (km - 10) * precoKmDesconto;

  //valor total da viagem
  let valorTotal = valorMinutos + valorKm;
  console.log(valorTotal);
}

solucao(20, 13.2)