const strings = ['a', 'b', 'c', 'd'];
//each variable is saved in sequential 32-bits, or 16 bytes

//push, adds to end of array
//O(1)
strings.push('e');

//pop, removes last item in array
//O(1)
strings.pop();
strings.pop();

//unshift, adds to front of array
//O(n), depends on size of array
strings.unshift('x');

//shift, removes from front of array
//O(n), depends on size of array
strings.shift();

//splice, adds to the middle of array if 2nd param is 0--normally 2nd param is a delete count
//O(n)
strings.splice(2, 0, 'z');

//STATIC ARRAYS
//fixed in size
//number of elements array can hold must be declared before array is created

//C++
// int a[20]
// int b[5]

//DYNAMIC ARRAYS
//automatic resizes
//append is likely O(1), but can be O(n)

console.log(strings);
