const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Precisamos de dois loops: um para checar se algum dos elementos da array inclui o id;
// Depois repetir isso para todos os objetos da array employees
function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// employees.some((employee) => employee.managers.some((manag) => manag === id));

// O que fazer: percorrer o array employees, se em algum objeto managers incluir a ID, pegar o nome e sobrenome da pessoa

function getRelatedEmployees(managerId) {
  const isSheHeManager = isManager(managerId);
  if (isSheHeManager === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const getEmployees = (id) => employees.filter((element) => element.managers.includes(id)); // 1. Pegar o objeto correspondente à cada funcionario supervisado
  return getEmployees(managerId).map((employee) => `${employee.firstName} ${employee.lastName}`); // 2. Em cada objeto, pegar nome e sobrenome do funcionário;
}

console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
