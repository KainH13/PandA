#!/usr/local/bin/python3.9


# O(n) time | O(1) space
def findThreeLargestNumbers(array):
    # set up storage of 3 largest values
    threeLargest = [None, None, None]
    # iterate through array
    for num in array:
        updateLargest(num, threeLargest)
    # return the 3 largest values in ascending order
    return threeLargest


def updateLargest(num, threeLargest):
    if threeLargest[2] == None or num > threeLargest[2]:
        updateThreeLargest(2, num, threeLargest)
    elif threeLargest[1] == None or num > threeLargest[1]:
        updateThreeLargest(1, num, threeLargest)
    elif threeLargest[0] == None  or num > threeLargest[0]:
        updateThreeLargest(0, num, threeLargest)


def updateThreeLargest(idx, num, threeLargest):
    # shift everything over to the left one spot
    for i in range(idx):
        threeLargest[i] = threeLargest[i + 1]
    # add new value at idx once other values are shifted
    threeLargest[idx] = num


print(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
