#!/usr/local/bin/python3.9

# O(n) time | O(d) space - where d is the greatest depth of the sub arrays
def productSum(array, multiplier = 1):
    sum = 0
    for i in array:
        if type(i) is list:
            sum += productSum(i, multiplier + 1)
        else:
            sum += i

    return sum * multiplier


test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
print(productSum(test))