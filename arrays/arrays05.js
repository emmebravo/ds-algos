class MyArr {
  constructor() {
    this.length = 0; //arr gives you a length prop
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    let lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shift(index);
    return item;
  }

  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.pop();
  }
}

const newArr = new MyArr();
newArr.push('hi');
newArr.push('you');
newArr.push('!');
console.log(newArr);
newArr.delete(1);
console.log(newArr);
