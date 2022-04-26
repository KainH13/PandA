#!/usr/local/bin/python3.9


def selectionSort(array):
    currentIdx = 0 # start at the first element of our array
    # sort array from right to left
    while currentIdx < len(array) - 1:
        smallestIdx = currentIdx # for tracking the smallest value in our unsorted section
        for i in range(currentIdx + 1, len(array)):
            # evaluate whether value at i is smaller than current index
            if array[i] < array[smallestIdx]:
                smallestIdx = i
        # now that we've found our smallest index we can swap it with current index
        swap(smallestIdx, currentIdx, array)
        currentIdx += 1
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


print(selectionSort([8, 5, 2, 9, 5, 6, 3]))