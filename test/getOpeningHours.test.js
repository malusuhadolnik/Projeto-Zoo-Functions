const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se, ao não receber nenhum parâmetro, a função getOpeningHours retorna um objeto com os horários de todos os dias da semana', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toStrictEqual(expected);
  });
  it('testa se para os argumentos Monday e 09:00-AM a função retorna a string The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('testa se para os argumentos Tuesday e 09:00-AM a função retorna a string The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });
  it('testa se para os argumentos Wednesday e 09:00-PM a função retorna a string The zoo is closed', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('testa se a string passada como parâmetro DAY é um dia da semana válido- deve estra presente no array WEEKDAY', () => {
    expect(() => getOpeningHours('Invalid day', '09:00-PM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('testa se a string passada como parâmetro DATAHOUR representa um número', () => {
    expect(() => getOpeningHours('Wednesday', 'AB:00-PM')).toThrow(/^The hour should represent a number$/);
  });
  it('testa se a abreviação do parâmetro DATAHOUR é AM ou', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-XM')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('testa se a hora é um número que está entre  >=0 e =< 12', () => {
    expect(() => getOpeningHours('Wednesday', '21:00-PM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('testa se os minutos são número que entre  >=0 e =< 59', () => {
    expect(() => getOpeningHours('Wednesday', '09:66-PM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
