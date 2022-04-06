#!/usr/local/bin/python3.9

# Recursive O(log(n)) time | O(log(n)) space
def binarySearch(array, target):
    return binarySearchHelper(array, target, 0, len(array) - 1)

def binarySearchHelper(array, target, left, right):
    if left > right:
        return -1
    middle = (left + right) // 2
    potentialMatch = array[middle]
    if target == potentialMatch:
        return middle
    elif target < potentialMatch:
        return binarySearchHelper(array, target, left, middle - 1)
    else:
        return binarySearchHelper(array, target, middle + 1, right)

test = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33

print(binarySearch(test, target))


# Iterative - preferred for space complexity
# O(log(n)) time | O(1) space
def binarySearchV2(array, target):
    # set initial pointers
    left = 0
    right = len(array) - 1

    while left <= right:
        middle = (left + right) // 2
        potentialMatch = array[middle]
        if target == potentialMatch:
            return middle
        elif target < potentialMatch:
            right = middle - 1 # move right pointer to the left of middle
        else:
            left = middle + 1 # move left pointer to the right of middle
    
    return -1

test = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 33

print(binarySearchV2(test, target))