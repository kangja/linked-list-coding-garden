// const LinkedListNode = require("./LinkedListNode");

// const someNode = new LinkedListNode(42);
// const someOtherNode = new LinkedListNode(13);
// const anotherNode = new LinkedListNode(7);

// someNode.next = someOtherNode;
// someOtherNode.next = anotherNode;
// console.log(someNode);

const LinkedList = require("./LinkedList");

const myList = new LinkedList();
myList.insert(42);
myList.insert(13);
myList.insert(7);

console.log(myList);
