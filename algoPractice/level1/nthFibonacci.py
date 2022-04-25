#!/usr/local/bin/python3.9

# O(2^n) time BAD | O(n) space
def getNthFib(n):
    # handle base cases of 1 and 2 (0, 1) in fib sequence
    if n == 1:
        return 0
    elif n == 2:
        return 1
    # then we use recursion to call this for all values needed to return the nth value in a fib sequence
    else:
        return getNthFib(n - 1) + getNthFib(n - 2)


print(getNthFib(6))


# # more efficient solution using memoization
# O(n) time - thanks to memoization | O(n) space - still same amount on call stack at once because of recursion
def getNthFibV2(n, memoize={1: 0, 2: 1}):
    # hash table must got in function params so that it can persist across recursive calls
    # check if n in hash table
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = getNthFibV2(n - 1, memoize) + getNthFibV2(n - 2, memoize)
        return memoize[n]


print(getNthFibV2(6))


# best solution using iteration and constant space
# O(n) time | O(1) space
def getNthFibV3(n):
    # set up array of first 2 fib numbers
    lastTwo = [0, 1]
    counter = 3  # because we have the first 2 and just need to calculate anything after that
    # calculate the next fib number and then update the array to containe that number at idx 1
    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    # return second element in lastTwo, which is now the nth fib number we were looking for
    return lastTwo[1] if n > 1 else lastTwo[0]


print(getNthFibV3(6))
