/* Quick Classes review for going forward */

//reference type
const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };

console.log(obj1 === obj2); //true
console.log(obj1 === obj3); //false

obj1.value = 15;
console.log(obj2.value); //15

//context vs scope
function name(a) {
  let b = 5;
  //scope is confined inside these curly brackets
}

//context tells you where you are within the obj
console.log(this); //what is the object environment that we're in right now
const obj4 = {
  a: function () {
    console.log('this inside obj4 ', this);
  },
};

console.log(obj4.a);

//instantiation, make multiple copies of an obj
class Player {
  constructor(name, type) {
    console.log('player ', this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type} `);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type); //whenever you extend a class, you use super to have access to parent constructor function
    console.log('wizard ', this);
  }

  play() {
    console.log(`Weeeee, I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
wizard2.introduce();
