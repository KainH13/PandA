// set up a linked list and add values to the end
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
  }

  addToEnd(data) {
    let runner = this.head;

    while (runner.next !== null) {
      runner = runner.next;
    }

    runner.next = new Node(data);

    return this;
  }

  display() {
    let output = "";
    let runner = this.head;

    while (runner !== null) {
      output += `${runner.data}\n`;
      runner = runner.next;
    }

    return output;
  }

  findAndRemoveOne(data) {
    let runner = this.head;

    while (runner.next !== null) {
      if (data === runner.next.data) {
        runner.next = runner.next.next;
        return this;
      }
      runner = runner.next;
    }

    console.log("Search value not found.");
    return this;
  }
}

SLL1 = new LinkedList(1).addToEnd(2).addToEnd(3).addToEnd(4);
SLL1.findAndRemove(2).display();

SLL2 = new LinkedList(1).addToEnd(2).addToEnd(3).addToEnd(4);
SLL2.findAndRemove(5).display();
