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
}

LL = new LinkedList(1);
LL.addToEnd(2).addToEnd(3)
console.log(LL.display())
