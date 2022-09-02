const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeInfo = (objeto) => {
  const obj = (Object.values(objeto))[0];
  return employees.filter((element) =>
    element.firstName === obj || element.lastName === obj || element.id === obj);
};

const getSpecies = (objeto) => {
  const employeeInfo = getEmployeeInfo(objeto);
  const tutelados = employeeInfo[0].responsibleFor;
  return tutelados.map((element) => species.find((elemento) => element === elemento.id));
};

const makeAnimalArray = (objeto) => {
  const obj = getSpecies(objeto);
  return obj.map((element) => element.name);
};

const makeLocationArray = (objeto) => {
  const obj = getSpecies(objeto);
  return obj.map((element) => element.location);
};

const makeCard = (objeto) => {
  const employeeInfo = getEmployeeInfo(objeto);
  const obj = {
    id: employeeInfo[0].id,
    fullName: `${employeeInfo[0].firstName} ${employeeInfo[0].lastName}`,
    species: makeAnimalArray(objeto),
    locations: makeLocationArray(objeto),
  };
  return obj;
};

const allPplInfo = () => {
  const bigArray = [];
  employees.forEach((element) => {
    const tutelados = element.responsibleFor.map((elmt) =>
      species.find((especie) => elmt === especie.id));
    const animalArray = tutelados.map((animal) => animal.name);
    const locationArray = tutelados.map((target) => target.location);
    const newObject = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: animalArray,
      locations: locationArray,
    };
    bigArray.push(newObject);
  });
  return bigArray;
};

// console.log(allPplInfo());

const isValidId = (objeto) => {
  const objValue = (Object.values(objeto))[0];
  return employees.some((element) =>
    element.id === objValue || element.firstName === objValue || element.lastName === objValue);
};

// console.log(isValidId({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(isValidId({ name: 'Nigel' }));
// console.log(isValidId({ name: 'Nelson' }));

function getEmployeesCoverage(objeto) {
  if (objeto === undefined) {
    return allPplInfo();
  }
  if (isValidId(objeto) === true) {
    return makeCard(objeto);
  }
  throw new Error('Informações inválidas');
}

// // console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// // console.log(getEmployeesCoverage({ name: 'Nigel' }));
// // console.log(getEmployeesCoverage({ name: 'Nelson' }));
// // console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c*' }));

module.exports = getEmployeesCoverage;
