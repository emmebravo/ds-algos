function mergeSortedArrays0(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  const newArr = arr1.concat(arr2);
  return newArr.sort((a, b) => a - b);
}

function mergeSortedArrays1(arr1, arr2) {
  if (!arr1.length) return arr2;
  if (!arr2.length) return arr1;

  const mergedArr = [];

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays0([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays1([0, 3, 4, 31], [4, 6, 30]));
