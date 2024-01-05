// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Filtro e validação de usuários

const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

const filtrarAdultos = usuarios.filter((usuario) => {
  return usuario.idade >= 18 && usuario.idade <= 65;
});

const verificarHabilitados = filtrarAdultos.every((usuario) => {
  return usuario.habilitado;
});

if (verificarHabilitados) {
  console.log("Todos passaram no teste.");
} else {
  console.log("Todos precisam estar habilitados.");
}
