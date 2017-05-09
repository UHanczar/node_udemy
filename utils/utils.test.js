const expect = require('expect');

const utils = require('./utils');

it('it should add two numbers', () => {
  const res = utils.add(33, 11);
  // if(res !== 44) {
  //   throw Error(`Expected 44, but got ${res}.`);
  // }

  expect(res).toBe(44).toBeA('number');
});

it('it should square the number', () => {
  const res = utils.square(5);
  // if(res !== 25) {
  //   throw Error(`Expected 25, but got ${res}.`);
  // }

  expect(res).toBe(25).toBeA('number');
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  // for objects or arrays use toEqual or toNotEqual or toInclude / toExclude or toNotInclude
  expect({ name: 'Uladzimir' }).toEqual({ name: 'Uladzimir' });

  expect([2, 3, 4]).toInclude(4);

  expect({
    name: 'Uladzimir',
    age: 32,
    location: 'Homiel'
  }).toInclude({
    name: 'Uladzimir'
  });
});

it('should asynd add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (res) => {
    expect(res).toBe(9).toBeA('number');
    done();
  });
});

it('should verify firstName and lastName', () => {
  const person = utils.setName({}, 'Uladzimir Hanchar');

  expect(person).toInclude({
    firstName: 'Uladzimir',
    lastName: 'Hanchar'
  });

  expect(person.firstName).toBe('Uladzimir').toBeA('string');
});
