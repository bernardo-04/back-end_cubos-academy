let { alunos } = require("../dados/bancoDeDados");
let { identificadorAluno } = require("../dados/bancoDeDados");

const listarAlunos = (req, res) => {
  res.status(200).json(alunos);
};

const obterAluno = (req, res) => {
  const { id } = req.params;
  const buscarAluno = alunos.find((aluno) => {
    return aluno.id === Number(id);
  });

  if (buscarAluno) {
    return res.status(200).json(buscarAluno);
  } else {
    return res.status(404).json({ mensagem: "Aluno não encontrado." });
  }
};

const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  //verifica se foram enviados todos os dados de cadastro
  if (!nome || !sobrenome || !idade || !curso) {
    return res.status(400).json({
      mensagem:
        "Não foram enviados todos os dados necessários para o cadastro. Aluno não cadastrado.",
    });
  }

  //verifica se os dados de texto não são strings vazias
  if (nome === "" || sobrenome === "" || curso === "") {
    return res.status(400).json({
      mensagem:
        "Alguns dados enviados não são válidos para o cadastro. Aluno não cadastrado.",
    });
  }

  //verifica se os dados de texto não são apenas espaços vazios
  if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
    return res.status(400).json({
      mensagem:
        "Alguns dados enviados não são válidos para o cadastro. Aluno não cadastrado.",
    });
  }

  //verifica se o aluno a ser cadastrado é maior de idade
  if (idade < 18) {
    return res.status(400).json({
      mensagem:
        "O aluno a ser cadastrado é menor de idade. Aluno não cadastrado.",
    });
  }

  const novoAluno = {
    id: identificadorAluno,
    nome,
    sobrenome,
    idade,
    curso,
  };
  identificadorAluno++;

  alunos.push(novoAluno);
  return res.status(201).send();
};

const excluirAluno = (req, res) => {
  const { id } = req.params;

  const alunoRemovido = alunos.find((aluno) => {
    return aluno.id === Number(id);
  });

  if (!alunoRemovido) {
    return res
      .status(404)
      .json({ mensagem: "Aluno não encontrado. Nenhum aluno foi excluído." });
  }

  alunos = alunos.filter((aluno) => {
    return aluno.id !== Number(id);
  });

  return res.status(200).json(alunoRemovido);
};

module.exports = {
  listarAlunos,
  obterAluno,
  cadastrarAluno,
  excluirAluno,
};
