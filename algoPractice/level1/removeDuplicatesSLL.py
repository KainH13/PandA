#!/usr/local/bin/python3.9


class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

    def addMany(self, values):
        current = self
        while current.next is not None:
            current = current.next
        for value in values:
            current.next = LinkedList(value)
            current = current.next
        return self

    def getNodesInArray(self):
        nodes = []
        current = self
        while current is not None:
            nodes.append(current.value)
            current = current.next
        return nodes


# O(n) time | O(1) space
def removeDuplicatesFromLinkedList(linkedList):
    # set up pointer to current node of the linked list and next value, starting at head
    currentNode = linkedList
    # while the next value is not null
    while currentNode is not None:
        # set up next distinct pointer
        nextDistinctNode = currentNode.next
        # move next distinct pointer until we find the next distinct value
        while (
            nextDistinctNode is not None and nextDistinctNode.value == currentNode.value
        ):
            nextDistinctNode = nextDistinctNode.next
        # remove duplicate nodes
        currentNode.next = nextDistinctNode
        currentNode = nextDistinctNode

    return linkedList.getNodesInArray()


test = LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6])
print(removeDuplicatesFromLinkedList(test))
