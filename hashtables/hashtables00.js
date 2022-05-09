const user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log(`WHAAAAA`);
  },
};

/*
with hash tables, with enough data & limited memory,
there will always be collisions which lead to linked lists!

an object ({}) can be used as a hash table, but in JS, keys that are numbers or functions get stringify. object hash tables also don't maintain the order of insertion; it's random

in ES6+ now there is Map and Sets
Map allows you to save any data type as key. Maps maintain the order of insertion

Set only stores keys; it doesn't store values

const map01 = new Map()
const set01 = new Set()
*/

console.log(user.age);
user.spell = `abra kedabra`;
console.log(user.spell);
console.log(user.scream());
console.log(user);
