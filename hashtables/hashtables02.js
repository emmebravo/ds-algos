//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRepeatChar(arr) {
  const map = {};

  //not using a traditional for-loop bc index doesn't matter

  for (num of arr) {
    map[num] = map[num] + 1 || 1;
    if (map[num] > 1) return num;
  }

  return `nothing repeats`;
}

console.log(firstRepeatChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRepeatChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRepeatChar([2, 3, 4, 5]));
console.log(firstRepeatChar([2, 5, 5, 2, 3, 5, 1, 2, 4]));
