#!/usr/local/bin/python3.9


# O(n^2) time | O(1) space
def bubbleSort(array):
    # set variable to track whether we're done sorting or not
    sorted = False
    counter = 0  # so that we don't sort values that are already sorted
    # carry out sorting iterations until sorted is true
    while not sorted:
        # set sorted to True as the base case
        sorted = True
        # iterate through the array bubbling greater values up
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i + 1]:
                # swap the values
                array[i + 1], array[i] = array[i], array[i + 1]
                # if a swap was done, continue sorting
                sorted = False
        counter += 1
    return array


print(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
