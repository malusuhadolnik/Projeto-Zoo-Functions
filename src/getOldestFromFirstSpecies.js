const data = require('../data/zoo_data');
// A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;
// A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;
// A função deverá encontrar o animal mais velho daquela espécie;
// --> usar reduce para comparar idades residents.age
// A função deverá retornar um array com as informações do animal mais velho daquela espécie.
// map e filter retornam array usar um filter
// retorno: ['Margherita', 'female', 10], // é a chave do animal dentro de residents

// O que será testado:
// Passado o id de uma pessoa colaboradora, a função getOldestFromFirstSpecies deverá encontrar a primeira espécie de animal gerenciado por essa pessoa, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie.

function getOldestFromFirstSpecies(id) {
  const idFirstSp = (data.employees.find((element) => element.id === id)).responsibleFor[0];
  const getSpecies = data.species.filter((element) => element.id === idFirstSp);

  const residentsKey = (Object.values(getSpecies))[0].residents;
  const ages = residentsKey.map((element) => element.age);

  const highestNum = ages.reduce((acc, curr) => ((acc > curr) ? acc : curr), 0);
  const animalOfInterest = residentsKey.filter((element) => element.age === highestNum);
  return Object.values((animalOfInterest)[0]);
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
