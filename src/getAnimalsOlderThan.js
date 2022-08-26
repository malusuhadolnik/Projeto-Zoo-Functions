const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.

// Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:

// Os animais devem ter essa idade ou serem mais velhos. element.age >= age
// Retorne um valor booleano. SOME OU EVERY

// O que será testado:

// A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.

function getAnimalsOlderThan(animal, age) {
  const findTheAnimal = species.find((objeto) => objeto.name === animal);
  // console.log(findTheAnimal);
  return findTheAnimal.residents.every((element) => element.age >= age);
}
console.log(getAnimalsOlderThan('elephants', 10));
module.exports = getAnimalsOlderThan;
