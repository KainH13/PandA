# O(nLogn) time | O(n) space
def sortedSquaredArray(array):
    output = [0 for _ in array]
    # iterate through indexes
    for i in range(len(array)):
        # square value at index
        output[i] = array[i] ** 2
    # sort array to prevent negative inputs from messing with ascending order
    output.sort()
    return output


array = [1, 2, 3, 4, 5, 6, 8, 9]
print(sortedSquaredArray(array))

# O(n) time | O(n) space
def sortedSquaredArrayV2(array):
    output = [0 for _ in array]
    smallIdx = 0
    largeIdx = len(array) - 1

    for i in reversed(range(len(array))):
        smallValue = array[smallIdx]
        largeValue = array[largeIdx]

        if abs(smallValue) > abs(largeValue):
            output[i] = smallValue**2
            smallIdx += 1
        else:
            output[i] = largeValue**2
            largeIdx += 1

    return output


array = [-1, -2, -3, -4, 1, 3, 5, 9]
print(sortedSquaredArray(array))
