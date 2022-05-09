class HashTable {
  constructor(size) {
    //when we create this hash table we give it the initial size of the array we want created
    //our data will live in this.data
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    //if they are no collisions, then add data
    if (!this.data[address]) {
      this.data[address] = []; //set the new address to equal an empty arr
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }

    return undefined;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) keysArr.push(this.data[i][0][0]);
    }

    return keysArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10);
myHashTable.set('apples', 5000);
myHashTable.set('berries', 10000);
myHashTable.set('oranges', 9548);
console.log(myHashTable.keys());
