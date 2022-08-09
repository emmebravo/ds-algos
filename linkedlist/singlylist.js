// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head; //since we only have one node, the tail is the same as the head
    this.length = 1; //this is optional
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; //add it to the tail bc the tail at constructor level is referencing the head, so it'll be added to the original object without messing with the head
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
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
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length) return this.printList();

    const leader = this.traverse(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
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

const mySLL = new SinglyLinkedList(10);
mySLL.append(5);
mySLL.append(16);
mySLL.prepend(1);
mySLL.insert(2, 99);
mySLL.insert(20, 88);
mySLL.insert(0, 21);
console.log(mySLL.printList());
myLL.remove(3);
console.log(mySLL.printList());
