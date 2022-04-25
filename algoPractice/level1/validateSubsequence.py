def isValidSubsequence(array, sequence):
    # set idx for value in sequence we are comparing to the values in array
    seqIdx = 0

    # if we find that value, starting looking for the next value in the rest of the array
    for i in array:
        if sequence[seqIdx] == i:
            seqIdx += 1
        if seqIdx == len(sequence):
            return True
    
    return False

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
print(isValidSubsequence(array, sequence))

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [11, 6, -1, 10]
print(isValidSubsequence(array, sequence))
