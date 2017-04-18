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
