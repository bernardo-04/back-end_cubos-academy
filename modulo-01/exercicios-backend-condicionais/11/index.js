// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Valor da parcela do Sucesso Compartilhado

//renda mensal do aluno, em reais.
const rendaMensalEmReais = 3000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em reais). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 10000;

const valorTotalDoCurso = 18000;
const taxa = 0.18; // a parcela é 18% da renda mensal da pessoa
let parcela;

if (mesesDecorridos > 60) {
  parcela = 0;
  console.log(`O valor da parcela desse mês é R$ ${parcela.toFixed(2)}, pois já se passou o período de 60 meses.`);

} else if (rendaMensalEmReais < 2000) {
  parcela = 0;
  console.log(`O valor da parcela desse mês é R$ ${parcela.toFixed(2)}, pois a renda do estudante está abaixo do valor mínimo de R$ 2000.00.`);

} else if (totalJaPagoPeloAluno < valorTotalDoCurso) {
  parcela = rendaMensalEmReais * taxa;
  console.log(`O valor da parcela desse mês é R$ ${parcela.toFixed(2)}`);

} else if (totalJaPagoPeloAluno === valorTotalDoCurso) {
  parcela = 0;
  console.log(`O valor da parcela desse mês é R$ ${parcela.toFixed(2)}, pois o aluno já pagou o valor total do curso.`);
}