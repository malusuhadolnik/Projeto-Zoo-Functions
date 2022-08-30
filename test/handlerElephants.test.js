const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se, ao não receber nenhum parâmetro, a função handlerElephants retorna undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });
  it('testa se, ao receceber como parâmetro um valor que não seja uma string, a função handlerElephants retorna a mensagem: Parâmetro inválido, é necessário uma string', () => {
    const notAString = !'string';
    const actual = handlerElephants(notAString);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('testa se o argumento count retorna o número inteiro 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('testa se o argumento names retorna um array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('testa se o argumento averageAge retorna um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
  it('testa se handlerElephants retorna null se os parâmetros passados forem diferente de count, names ou averageAge; ou qualquer outra chave do retorno de getElephants', () => {
    const actual = handlerElephants('stringAleatoria');
    expect(actual).toBeNull();
  });
  it('testa se elephants, a variável que recebe a função getElephants em handlerElephants, contém entre suas chaves o parâmetro passado em handlerElephants', () => {
    const actual1 = handlerElephants('id');
    const expected1 = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    expect(actual1).toBe(expected1);

    const actual2 = handlerElephants('name');
    const expected2 = 'elephants';
    expect(actual2).toBe(expected2);

    const actual3 = handlerElephants('popularity');
    const expected3 = 5;
    expect(actual3).toBe(expected3);

    const actual4 = handlerElephants('location');
    const expected4 = 'NW';
    expect(actual4).toBe(expected4);

    const actual5 = handlerElephants('availability');
    const expected5 = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual5).toEqual(expected5);

    // const actual6 = handlerElephants('residents');
    // const expected6 = [
    //   { name: 'Ilana', sex: 'female', age: 11 },
    //   { name: 'Orval', sex: 'male', age: 15 },
    //   { name: 'Bea', sex: 'female', age: 12 },
    //   { name: 'Jefferson', sex: 'male', age: 4 }];
    // expect(actual6).toEqual(expected6);
  });
});
