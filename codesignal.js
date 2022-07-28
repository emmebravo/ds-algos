// function solution(str) {
//   const result = [];

//   for (let letter of str) {
//     if (letter === ')') {
//       let revStr = '';
//       while (result.length > 0 && result[result.length - 1] !== '(') {
//         revStr += result.pop();
//       }
//       result.pop();
//       for (let char of revStr) {
//         result.push(char);
//       }
//     } else result.push(letter);
//   }
//   return result.join('');
// }

// // only flip the words inside paren

// console.log(solution('(bar)'));
// console.log(solution('foo(bar)baz'));

// const startTime = performance.now();
// console.log(solution('foo(bar(baz))blim'));
// const endTime = performance.now();
// console.log(`Call to took ${endTime - startTime} milliseconds`);

// function solution(arr) {
//   let result = 0;
//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] !== arr[0] && arr[i] !== arr[1]) result++;
//   }
//   return result;
// }

// console.log(solution([4, 3, 2, 3, 2, 5, 4, 3]));
// console.log(solution([3, 3, 1, 1, 3]));

function solution(str, arr) {
  const newStr = str.split('');
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'count') {
      let total = newStr.reduce((acc, cv) => acc + +cv, 0);
      result.push(total);
    } else if (arr[i] === 'flip') {
      let idx = newStr.indexOf('1');

      for (let i = 0; i <= idx; i++) {
        if (newStr[i] === '0') newStr[i] = '1';
        else newStr[i] = '0';
      }
      result.push(idx);
    }
  }
  return result;
}

const startTime = performance.now();
console.log(solution('0000101', ['count', 'flip', 'flip', 'flip', 'count']));
const endTime = performance.now();
console.log(`Call to took ${endTime - startTime} milliseconds`);

//function solution(arr) {
// let res = 0;
// let hm = new Map();
// for (let i of arr) {
//   let s = i.toString();
//   let c = s.split('');
//   c = c.sort();
//   let sorted = c.join('');
//   if (hm.get(sorted)) {
//     let count = hm.get(sorted);
//     count += 1;
//     hm.set(sorted, count);
//   } else {
//     hm.set(sorted, 1);
//   }
// }
// for (let k of hm.values()) {
//   let nCr = (k * (k - 1)) / 2;
//   res += nCr;
// }
// return res;

//   const hashmap = {};
//   let total = 0;
//   for (let num of arr) {
//     let newNum = num.toString().split('');
//     let sorted = newNum.sort().join('');
//     if (sorted in hashmap) hashmap[sorted] += 1;
//     else hashmap[sorted] = 1;
//   }

//   for (let el of Object.values(hashmap)) {
//     let totes = (el * (el - 1)) / 2;
//     total += totes;
//   }
//   return total;
// }

// console.log(solution([25, 35, 872, 228, 53, 278, 872]));
// console.log(solution([21, 12, 44, 43, 34]));

// function solution(arr) {
//   // initialise two variable one at start index of array, other at end index
//   let left = 0,
//     right = arr.length - 1,
//     last = -Infinity,
//     flag = true;

//   while (left <= right) {
//     // use flag variable to decide whether to consider element from begin or end if flag true element from begin considered else from end
//     if (flag) {
//       // check if the current element considered is bigger than last element considered if not return false
//       if (arr[left] <= last) return false;
//       last = arr[left++];
//     } else {
//       // check if the current element considered is bigger than last element considered if not return false
//       if (arr[right] <= last) return false;
//       last = arr[right--];
//     }
//     // revert the flag so that next time element from other end is considered
//     flag = !flag;
//   }
//   return true;
// }

// console.log(solution([4, 0, 2, 1, 3]));
// console.log(solution([3, 2, 0, 1]));
// console.log(solution([1, 3, 5, 6, 4, 2]));

// function solution2(str) {
//   let count = 0;

// for (let i = 0; i < str.length - 2; i++) {
//   for (let j = i + 1; j < str.length - 1; j++) {
//     let a = str.slice(0, i + 1);
//     let b = str.slice(i + 1, j + 1);
//     let c = str.slice(j + 1, str.length);
//     if (a + b != b + c && b + c != c + a && a + b != c + a) {
//       count++;
//     }
//   }
// }

// return count;

//   const result = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       let substr = str.slice(i, j);
//       if (!result.includes(substr) && substr.length > 1) {
//         result.push(substr);
//       }
//     }
//   }

//   return result.length;
// }

// console.log(solution2('xzxzx'));

// function solution3(arr) {
//   const result = [];
//   const len = Math.max(...arr.map((el) => el.length));

//   for (let i = 0; i <= len; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] === undefined) continue;
//       else result.push(arr[j][i]);
//     }
//   }

//   return result.join('');
// }
// const startTime = performance.now();
// //console.log(solution3(['Daisy', 'Rose', 'Hyacinth', 'Poppy']));
// console.log(solution3(['E', 'M', 'I', 'L', 'Y']));
// const endTime = performance.now();
// console.log(`Call to took ${endTime - startTime} milliseconds`);
