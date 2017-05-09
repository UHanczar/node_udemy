const add = (a, b) => a + b;
const square = x => x * x;
const setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

const asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 100);
};

const asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 100);
};

module.exports = {
  add,
  square,
  setName,
  asyncAdd,
  asyncSquare
};
