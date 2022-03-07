class Node {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);

    if (this.root !== null) {
      this.root = newNode;
      return this;
    }

    let runner = this.root;
    while (runner !== null) {
      if (runner.val < value) {
        // move right
        if (runner.right === null) {
          runner.right = newNode;
          return this;
        }
        runner = runner.right;
      } else {
        // move left
        if (runner.left === null) {
          runner.left = newNode;
          return this;
        }
        runner = runner.left;
      }
    }
  }

  min() {
    if (this.root == null) {
      return "Tree is empty";
    }

    let runner = this.root;
    while (runner.left != null) {
      runner = runner.left;
    }

    return runner.val;
  }

  size(current_node) {
    if (current_node == null) {
      return 0;
    } else {
      return this.size(current_node.left) + 1 + this.size(current_node.right);
    }
  }
}

let bst1 = new BST();
bst1.add(1).add(2).add(3).add(4).add(5);
console.log(bst1);
