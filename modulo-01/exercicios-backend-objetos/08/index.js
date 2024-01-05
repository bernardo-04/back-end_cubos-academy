// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Meus pets

const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

for (let i = 0; i < usuarios.length; i++){
    if (usuarios[i].pets.length > 0){
        let escritaPet = (usuarios[i].pets.length === 1 ? "pet" : "pets");

        console.log(`Sou ${usuarios[i].nome} e tenho ${usuarios[i].pets.length} ${escritaPet}.`);
    } else {
      console.log(`Sou ${usuarios[i].nome} e não tenho pets.`);
    }
}