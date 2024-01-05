// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Adicionando maior idade

const usuarios = [
    {
        nome: "João",
        idade: 25
    },
    {
        nome: "Ana",
        idade: 18
    },
    {
        nome: "Beatriz",
        idade: 15
    },
    {
        nome: "Carlos",
        idade: 16
    },
    {
        nome: "Antonio",
        idade: 32
    }
];

for (let i = 0; i < usuarios.length; i++){
    if(usuarios[i].idade > 17){
        usuarios[i].maior_idade = true;
    } else {
        usuarios[i].maior_idade = false;
    }
}

console.log(usuarios);