function solucao(min, max, valores) {
  const verificarValores = valores.filter((valor) => {
    return valor >= min && valor <= max;
  });

  console.log(verificarValores);
}
