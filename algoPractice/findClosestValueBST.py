def findClosestValueInBst(tree, target):
    # set pointer and variable holding closest value
    currentNode = tree
    closest = tree.value

    # traverse tree
    while currentNode is not None:
        if abs(target - closest) > abs(target - currentNode.value):
            closest = currentNode.value
        if target < currentNode.value:
            currentNode = currentNode.left
        elif target > currentNode.value:
            currentNode = currentNode.right
        else:  # this would be when the target and currentNode.value are equal
            break

    return closest


# using recursion
def findClosestValueInBstV2(tree, target):
    return findClosestValueInBstV2Helper(tree, target, tree.value)


def findClosestValueInBstV2Helper(tree, target, closest):
    # base case -- stop recursion
    if tree is None:  # if the next sub tree is none
        return closest
    if abs(target - closest) > abs(target - tree.value):
        closest = tree.value
    if target < tree.value:
        return findClosestValueInBstV2Helper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestValueInBstV2Helper(tree.right, target, closest)
    else:
        return closest


# set up BST
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


root = BST(10)
root.left = BST(5)
root.left.left = BST(2)
root.left.left.left = BST(1)
root.left.right = BST(5)
root.right = BST(15)
root.right.left = BST(13)
root.right.left.right = BST(14)
root.right.right = BST(22)
print(findClosestValueInBst(root, 12))
print(findClosestValueInBstV2(root, 12))
