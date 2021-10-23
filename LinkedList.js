const LinkedListNode = require("./LinkedListNode");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(data) {
    const node = new LinkedListNode(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.previous = node;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
}

module.exports = LinkedList;
