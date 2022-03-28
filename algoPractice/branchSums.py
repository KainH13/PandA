#!/usr/local/bin/python3.9


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, values, i=0):
        if i >= len(values):
            return
        queue = [self]  # array holding binary tree object
        while len(queue) > 0:
            current = queue.pop(0)
            if current.left is None:
                current.left = BinaryTree(values[i])
                break
            queue.append(current.left)
            if current.right is None:
                current.right = BinaryTree(values[i])
                break
            queue.append(current.right)
        self.insert(values, i + 1)
        return self


def branchSums(root):
    sums = []
    calculateBranchSums(root, 0, sums)
    return sums


# helper that takes in a node, the running sum up to that node, and a list of branch sums calculate so far
def calculateBranchSums(node, runningSum, sums):
    if node is None:
        return

    newRunningSum = runningSum + node.value
    # if we're at the a branch
    print(node.left)
    if node.left is None and node.right in None:
        sums.append(newRunningSum)
        return

    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)


tree = BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10])

print(branchSums(tree))
