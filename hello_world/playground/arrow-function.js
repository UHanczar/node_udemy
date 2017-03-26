const square = x => x * x;
console.log(square(3));

const user = {
  name: 'Uladzimir',
  sayHi: () => {
    console.log(`Hi, ${this.name}!`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi, ${this.name}`);
  }
};

console.log(user.sayHi());
console.log(user.sayHiAlt(1,2,3));
