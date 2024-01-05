function processData(input) {
  const formatarDados = (input) => {
    const inputSplit = input.trim().split("\n");
    array = [];

    for (let item of inputSplit) {
      arrayItem = item.split(" ");
      array.push(arrayItem);
    }

    return array;
  };

  const inputDados = formatarDados(input);
  let maiorDistancia = 0;
  let x1, y1;
  let x2, y2;

  for (let i = 1; i <= inputDados[0]; i++) {
    //elemento 1
    x1 = Number(inputDados[i][0]);
    y1 = Number(inputDados[i][1]);

    for (let j = 1; j <= inputDados[0]; j++) {
      //elemento 2
      x2 = Number(inputDados[j][0]);
      y2 = Number(inputDados[j][1]);

      const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      if (distancia > maiorDistancia) {
        maiorDistancia = distancia;
      }
    }
  }

  console.log(maiorDistancia);
}
