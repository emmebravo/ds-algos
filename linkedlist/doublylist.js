class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head; //since we only have one node, the tail is the same as the head
    this.length = 1; //this is optional
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode; //add it to the tail bc the tail at constructor level is referencing the head, so it'll be added to the original object without messing with the head
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverse(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length) return this.printList();
    if (index === 0) {
      const currentNode = this.traverse(1);
      this.head = currentNode;
      this.head.prev = null;
    }

    const leader = this.traverse(index - 1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;

    this.length--;
    return this.printList;
  }

  traverse(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const myDLL = new DoublyLinkedList(10);
myDLL.append(5);
myDLL.append(16);
myDLL.prepend(1);
myDLL.insert(1, 99);
myDLL.insert(20, 88);
myDLL.insert(0, 21);
console.log(myDLL.printList());
myDLL.remove(1); // check remove be at 0th index it breaks
console.log(myDLL.printList());
console.log(myDLL);
