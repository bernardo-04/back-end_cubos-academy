function solucao(lista) {
  const maioresDeIdade = lista.filter((idade) => {
    return idade >= 18;
  });

  let menorIdade = maioresDeIdade[0];
  for (let item of maioresDeIdade) {
    if (item < menorIdade)
      menorIdade = item;
  }

  if (maioresDeIdade.length === 0)
    console.log("CRESCA E APARECA");
  else
    console.log(menorIdade);
}
