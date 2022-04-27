#!/usr/local/bin/python3.9


# O(n) time | O(n) space -- because of frames on callstack
def isPalindromeRecursive(string, i=0):
    # set up pointer to value in symmetrical position to i
    j = len(string) - 1 - i
    # recursively work through symmetrical letters in string
    return (
        True
        if i >= j
        else string[i] == string[j] and isPalindromeRecursive(string, i + 1)
    )


print(isPalindromeRecursive("abcdcba"))
print(isPalindromeRecursive("abcdbba"))


def isPalindromePointers(string):
    # set up pointers for first and last index of string
    left = 0
    right = len(string) - 1
    # iterate until pointers pass or equal each other
    while left <= right:
        # return false if characters at this position are not equal
        if string[left] != string[right]:
            return False
        left += 1
        right -= 1
    return True


print(isPalindromePointers("abcdcba"))
print(isPalindromePointers("abcdbba"))
