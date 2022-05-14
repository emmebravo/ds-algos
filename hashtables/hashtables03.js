class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  get(key) {
    let address = this._hash(key);
    const currBucket = this.data[address];

    if (currBucket) {
      for (let i = 0; i < currBucket.length; i++) {
        if (currBucket[i][0] === key) return currBucket[i][1];
      }
    }
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) keysArr.push(this.data[i][0][0]);
    }
    return keysArr;
  }
}

const newTable = new HashTable(50);
newTable.set('grapes', 100);
newTable.get('grapes');
console.log(newTable.keys());
console.log(newTable);
