const LinkedListNode = require("./LinkedListNode");

const someNode = new LinkedListNode(42);
const someOtherNode = new LinkedListNode(13);

someNode.next = someOtherNode;

console.log(someNode);
