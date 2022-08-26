const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const teste = species.filter((element) => ids.includes(element.id));
  return teste;
}

// usamos o includes para verificar se o parâmetro passado (o array ids) inclui a id do elemento que está sendo iterado

module.exports = getSpeciesByIds;
