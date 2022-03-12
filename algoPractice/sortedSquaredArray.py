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
