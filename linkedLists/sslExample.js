class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(val) {
        // create a new node with the value provided
        let new_node = new Node(val);
        console.log(new_node);

        // check for a head node and create one if it doesn't
        if (!this.head) {
            this.head = new_node;
            return this;
        }

        // if there is a head, assign the .next of our new node to the existing head node
        new_node.next = this.head;

        // then we can make our new_node the head without losing the existing head node
        this.head = new_node;

        return this;
    }

    removeFront() {
        // point the head at the node after the existing head
        this.head = this.head.next;
        return this;
    }

    front() {
        return this.head.data;
    }

    findSum() {
        // start runner at head of list
        let runner = this.head;
        let sum = 0;

        // move runner back in list until their next = null
        while (runner !== null) {
            sum += runner.data;
            runner = runner.next;
        }
        return sum;
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

// testing removeFront
let linkedList = new SLL();
linkedList.addFront(2).addFront(1);
console.log(linkedList.front());
console.log(linkedList.findSum());
console.log(linkedList.display());
