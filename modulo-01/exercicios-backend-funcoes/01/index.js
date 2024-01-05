// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Sistema de correção de provas

//função que calcula o valor das questões da prova considerando que todas tenham o mesmo valor
function valorCadaQuestao (prova) {
    return prova.valor / prova.questoes.length;
}

function corrigirProva (prova) {
    const valorQuestoes = valorCadaQuestao(prova);
    let acertos = 0;
    let nota;

    for(let i = 0; i < prova.questoes.length; i++){
        if (prova.questoes[i].resposta === prova.questoes[i].correta)
            acertos++;
    }

    nota = acertos * valorQuestoes;
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}.`);
}

const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

corrigirProva(prova);