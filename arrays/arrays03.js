function reverse0(str) {
  if (!str || str.length < 2) return str;
  return str.split('').reverse().join('');
}

function reverse1(str) {
  if (!str || str.length < 2) return str;

  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverse2(str) {
  if (!str || str.length < 2) return str;

  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

//ES6++
const reverse3 = (str) => str.split('').reverse().join('');
const reverse4 = (str) => [...str].reverse().join('');

console.log(reverse0('Hi, my name is Emme'), 'reverse0 fcn');
console.log(reverse1('Hi, my name is Emme'), 'reverse1 fcn');
console.log(reverse2('Hi, my name is Emme'), 'reverse2 fcn');
console.log(reverse3('Hi, my name is Emme'), 'reverse3 fcn');
console.log(reverse4('Hi, my name is Emme'), 'reverse4 fcn');
