const { team } = require('faker/lib/locales/en');
const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// As duas funções recebem um array no seguinte formato:
const mockObject = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 22 },
  { name: 'Pedro Henrique Carvalho', age: 30 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const filterChildren = entrants.filter((element) => element.age < 18);
  const children = ({ child: (Object.keys(filterChildren)).length });

  const filterAdults = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const adults = ({ adult: (Object.keys(filterAdults)).length });

  const filterElderly = entrants.filter((element) => element.age >= 50);
  const elderly = ({ senior: (Object.keys(filterElderly)).length });

  const visitorsByAge = {};
  return Object.assign(visitorsByAge, children, adults, elderly);
}

// console.log(countEntrants(mockObject));
//     result = species.reduce((accumulator, current) =>
// Object.assign(accumulator, { [current.name]: current.residents.length }), {});
// teste = filterChildren.reduce((acc,curr) => acc + curr, 0); retorna o objeto inicial

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const tamanhoObjeto = (Object.keys(entrants)).length;
  if (tamanhoObjeto === 0) {
    return 0;
  }
  const chaveValorVisitors = countEntrants(entrants);
  const valueKids = chaveValorVisitors.child * prices.child;
  const valueAdults = chaveValorVisitors.adult * prices.adult;
  const valueElderly = chaveValorVisitors.senior * prices.senior;

  return Math.round((valueKids + valueAdults + valueElderly) * 100) / 100;
}

console.log(calculateEntry(mockObject));
console.log(calculateEntry());
console.log(calculateEntry({}));

module.exports = { calculateEntry, countEntrants };
