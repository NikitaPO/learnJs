'use strict';

const _ = require('lodash');

let userOne = {
  fullName: {
    name: "Misha",
    lastname: "Egorov",
  },
  age: 23,
}

let userTwo = _.clone(userOne);

userTwo.fullName.name = 'Egor';

console.log(userOne);
console.log(userTwo);
console.log(userOne.fullName == userTwo.fullName);
