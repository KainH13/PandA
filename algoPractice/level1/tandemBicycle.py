#!/usr/local/bin/python3.9

# O(n logn) time | O(1) space
def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
    # store total speed
    totalSpeed = 0
    # sort arrays
    redShirtSpeeds.sort()
    # reverse one array if fastest = False this way the rest of the operations can stay the same
    if fastest is False:
        blueShirtSpeeds.sort(reverse=True)
    else:
        blueShirtSpeeds.sort()
    # iterate through indexes in one array
    for i in range(len(redShirtSpeeds)):
        # pair value at index with value at len(array - 1 - index) in other array
        pair = [redShirtSpeeds[i], blueShirtSpeeds[len(blueShirtSpeeds) - 1 - i]]
        # add larger value of the pair to total speed
        if pair[0] == pair[1] or pair[0] > pair[1]:
            totalSpeed += pair[0]
        else:
            totalSpeed += pair[1]
    return totalSpeed


redShirtSpeeds = [5, 5, 3, 9, 2]
blueShirtSpeeds = [3, 6, 7, 2, 1]
print(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest=True))
