const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  let result;
  if (animal === undefined) {
    result = species.reduce((accumulator, current) =>
      Object.assign(accumulator, { [current.name]: current.residents.length }), {});
  } else if ((Object.keys(animal)).length === 1) {
    const valor = (Object.values(animal)).toString();
    result = (species.find((element) => valor === element.name)).residents.length;
  } else if ((Object.keys(animal)).length === 2) {
    const values2 = Object.values(animal);
    const filterSpecies2 = species.find((element) => values2[0] === element.name);
    result = (filterSpecies2.residents.filter((elementos) => elementos.sex === values2[1])).length;
  }
  return result;
}
const girafas = { specie: 'giraffes' };
const sapos = { specie: 'frogs' };
const girafas2 = { specie: 'giraffes', sex: 'female' };
// console.log(speciesQuantity(girafas));
// console.log(speciesQuantity(sapos));
console.log(countAnimals(sapos));
console.log(countAnimals(girafas));
console.log(countAnimals());
console.log(countAnimals(girafas2));

module.exports = countAnimals;
