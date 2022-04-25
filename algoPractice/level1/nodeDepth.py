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


# O(n) time | O(h) space (height of tree)
def nodeDepthsV1(root):
    sumOfDepths = 0
    stack = [{"node": root, "depth": 0}]  # store node info starting at root
    while len(stack) > 0:
        nodeInfo = stack.pop()  # take off top of stack
        node, depth = nodeInfo["node"], nodeInfo["depth"]  # extract attributes
        if node is None:  # make sure we don't handle None nodes pushed to stack
            continue
        sumOfDepths += depth  # add depth from current targeted node to sumOfDepths
        # add children nodes to stack
        stack.append({"node": node.left, "depth": depth + 1})
        stack.append({"node": node.right, "depth": depth + 1})
    return sumOfDepths


tree = BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9])
print(nodeDepthsV1(tree))


# O(n) time | O(h) space
def nodeDepthsV2(root, depth=0):
    # handle base case of recursion
    if root is None:
        return 0

    return (
        depth + nodeDepthsV2(root.left, depth + 1) + nodeDepthsV2(root.right, depth + 1)
    )


print(nodeDepthsV2(tree))
