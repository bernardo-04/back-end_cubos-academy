// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Modificando um array

const capitalizeString = (string) => {
  string = string.toLowerCase();
  string = string.slice(0, 1).toUpperCase() + string.slice(1);

  return string;
};

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const capitalizeArray = frutas.map((fruta) => {
  const frutaCapitalize = capitalizeString(fruta);
  fruta = `${frutas.indexOf(fruta)} - ${frutaCapitalize}`;
  return fruta;
});

console.log(capitalizeArray);
