function processData(input) {
  const inputFormatado = input.split("\n");
  const senhaCorreta = inputFormatado[0];
  const palavraDigitada = inputFormatado[1];

  let cofreAbre = false;
  let backupIndice = 0;

  for (let i = 0; i < senhaCorreta.length; i++) {
    if (palavraDigitada.includes(senhaCorreta[i], backupIndice)) {
      cofreAbre = true;
      backupIndice = palavraDigitada.indexOf(senhaCorreta[i], backupIndice) + 1;
    } else {
      cofreAbre = false;
    }
  }

  if (cofreAbre)
    console.log("SIM");
  else
    console.log("NAO");
}
