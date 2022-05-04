class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //most common array method, access
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++; //now MyArray has an extra length
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      //shifted items to the left by 1
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push('hi');
newArr.push('!');
newArr.push('you');
newArr.push('are');
newArr.push('nice');
console.log(newArr);
newArr.delete(1);
console.log(newArr);
newArr.delete(0);
console.log(newArr);
