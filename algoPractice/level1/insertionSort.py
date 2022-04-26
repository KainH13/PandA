#!/usr/local/bin/python3.9


# O(n^2) time | O(1) space
def insertionSort(array):
    # iterate through array left to right starting at 1 so that backwards comparison is possible
    for i in range(1, len(array)):
        j = i  # declare another idx variable to use for backwards comparison and iteration
        # iterate from current index left, swapping if needed
        while j > 0 and array[j] < array[j - 1]:
            swap(j, j - 1, array)
            j -= 1

    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


print(insertionSort([8, 5, 2, 9, 5, 6, 3]))
