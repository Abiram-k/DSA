class singleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SampleForCycle {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  makeItCyclic() {
    if (!this.head) return;

    if (this.head == this.tail) {
      this.head.next = this.head;
      this.head.prev = this.head;
    } else {
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNode(value) {
    const newNode = new singleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  displayNodes() {
    if (!this.head) {
      console.log("No node are there.");
      return;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.value} => `;
      current = current.next;
    }
    console.log(`${result}null`);
  }

  removeNextNode(value) {
    if (this.head == null) {
      console.log("No nodes are there !");
      return;
    }
    let current = this.head;
    while (current.next && current.value != value) {
      current = current.next;
    }
    if (!current || !current.next) {
      console.log(
        "Node with the given value not found or no next node to remove!"
      );
      return;
    }
    const nodeToRemove = current.next;
    current.next = nodeToRemove.next;

    if (nodeToRemove == this.tail) {
      this.tail = current;
      this.tail.next = null;
    }
  }
  reverseList() {
    let current = this.head;
    let prev = null;
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
}

const linkedListInstance = new SinglyLinkedList();
linkedListInstance.addNode(10);
linkedListInstance.addNode(40);
linkedListInstance.addNode(19); //target
linkedListInstance.addNode(89);
linkedListInstance.addNode(75);
linkedListInstance.removeNextNode(89);
linkedListInstance.reverseList();
linkedListInstance.displayNodes();

// console.log("<<<<<<<< Doubly Linked List >>>>>>>>>>>>>");

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNewNode(value) {
    const newNode = new DoubleNode(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    console.log("node added");
  }
  displayNode() {
    if (!this.head) {
      console.log("No nodes are there !");
      return;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.value} => `;
      current = current.next;
    }
    console.log(result + "null");
  }
  removeNextNode(value) {
    if (!this.head) {
      console.log("No nodes are there !");
      return;
    }
    let current = this.head;
    while (current && current.next && current.value != value) {
      current = current.next;
    }
    if (!current || !current.next) {
      console.log(
        "No next node to remove for the given value!,it may be the last value 😁"
      );
      return;
    }
    const nodeToRemove = current.next;

    if (nodeToRemove.next) 
      nodeToRemove.next.prev = current;
    
    current.next = nodeToRemove.next;

    if (nodeToRemove == this.tail) {
      this.tail = current;
      this.tail.next = null;
    }

    console.log(
      "Removed Next  node of ",
      value,
      ": Node =>",
      nodeToRemove.value
    );
  }
}

const doublyInstance = new DoublyLinkedList();
// doublyInstance.addNewNode(10);
// doublyInstance.addNewNode(60);
// doublyInstance.addNewNode(550);
// doublyInstance.addNewNode(40);
// doublyInstance.removeNextNode(10);
// doublyInstance.displayNode();

const arrayToLinkedList = (arr) => {
  if (!arr || arr.length < 1) {
    console.log("No elements were founded!");
    return;
  }
  let head = { value: null, next: null, prev: null };
  let tail = { value: null, next: null, prev: null };
  let length = arr.length;
  let n = 0;
  
  while (n < length) {
    const newNode = new DoubleNode(arr[n]);
    if (!head.value) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      newNode.prev = tail;
      tail = newNode;
    }
    n += 1;
  }
  return { head, tail };
};

let array = [1, 2, 3, 4, 5, 6];
const { head, tail } = arrayToLinkedList(array);
const printLinkedList = (head) => {
  let current = head;
  const elements = [];
  while (current) {
    elements.push(current.value);
    current = current.next;
  }
  console.log("Linked List: ", elements.join(" <-> "));
};

// printLinkedList(head);

class CreateNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ExNode {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNode(value) {
    const newNode = new CreateNode(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  displayNode() {
    if (this.head == null) {
      console.log("No nodes are there !");
      return;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " => ";
      current = current.next;
    }
    console.log(result, "null");
  }
  reverseNode() {
    if (this.head == null) {
      console.log("No nodes are there!");
      return;
    }
    let current = this.head;
    let prev = null;
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
  removeDuplicate() {
    if (!this.head) {
      console.log("No nodes are there !");
      return;
    }
    let current = this.head;
    while (current) {
      let afterNode = current.next;
      while (afterNode) {
        if (current.value == afterNode.value) {
          current.next = afterNode.next;
        }
        if (afterNode == this.tail) {
          this.tail = afterNode;
        }
        afterNode = afterNode.next;
      }
      current = current.next;
    }
  }
  removeMiddleNode() {
    if (this.head == null) {
      console.log("No node there !");
      return;
    }
    let prev = null;
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    prev.next = slow.next;
  }
}
const ExInstande = new ExNode();
ExInstande.addNode(50);
ExInstande.addNode(60);
ExInstande.addNode(60);
ExInstande.addNode(60);
ExInstande.addNode(770);
ExInstande.addNode(770);
ExInstande.addNode(770);
ExInstande.addNode(400);
ExInstande.addNode(400);
ExInstande.addNode(800);
// ExInstande.reverseNode();
ExInstande.removeDuplicate();
ExInstande.removeMiddleNode();
ExInstande.displayNode();




