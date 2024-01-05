// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Separando jovens de adultos

const usuarios = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  }
];

const jovens = [];
const adultos = [];

for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].idade < 18){
        jovens.push(
            {
                nome : usuarios[i].nome,
                idade : usuarios[i].idade
            }
        );
    } else {
        adultos.push(
            {
                nome : usuarios[i].nome,
                idade : usuarios[i].idade
            }
        );
    }
}

console.log(jovens);
console.log(adultos);