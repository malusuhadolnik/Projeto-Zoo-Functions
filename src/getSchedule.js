const data = require('../data/zoo_data');

// inicio: para compor o objeto fullSchedule
const horas = Object.entries(data.hours);

const opn = (weekday) => {
  const getDay = horas.filter((element) => element.includes(weekday));
  return Object.values((getDay[0])[1])[0];
};

const close = (weekday) => {
  const getDay = horas.filter((element) => element.includes(weekday));// pega a array correspondente à weekday
  const getOpenClose = (getDay[0])[1]; // acessa o objeto dentro da array
  return Object.values(getOpenClose)[1]; // pega o valor correspondete à open
};

const getAnimalsByDay = (weekday) => {
  const teste = data.species.filter((element) => element.availability.includes(weekday));
  return teste.map((element) => element.name);
};

const fullSchedule = {
  Tuesday: {
    officeHour: `Open from ${opn('Tuesday')}am until ${close('Tuesday')}pm`,
    exhibition: getAnimalsByDay('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${opn('Wednesday')}am until ${close('Wednesday')}pm`,
    exhibition: getAnimalsByDay('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${opn('Thursday')}am until ${close('Thursday')}pm`,
    exhibition: getAnimalsByDay('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${opn('Friday')}am until ${close('Friday')}pm`,
    exhibition: getAnimalsByDay('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${opn('Saturday')}am until ${close('Saturday')}pm`,
    exhibition: getAnimalsByDay('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${opn('Sunday')}am until ${close('Sunday')}pm`,
    exhibition: getAnimalsByDay('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};
console.log(fullSchedule);
// fim da composição do objeto fullSchedule

const getAnimalSchedule = (scheduleTarget) => {
  const filterAnimal = data.species.filter((element) => element.name === scheduleTarget);
  return filterAnimal[0].availability;
};
// console.log(getAnimalSchedule('elephants'));

const dailySchedule = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const key = scheduleTarget;
  const object = {};
  object[key] = { officeHour: `Open from ${opn(scheduleTarget)}am until ${close(scheduleTarget)}pm`,
    exhibition: getAnimalsByDay(scheduleTarget) };
  return object;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return fullSchedule;
  }
  if (data.species.map((element) => element.name).includes(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return dailySchedule(scheduleTarget);
  }
  return fullSchedule;
}

// console.log(getSchedule()); // Funciona
// console.log(getSchedule('lions'));
// console.log(getSchedule('giraffes'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Freja'));
module.exports = getSchedule;
