#!/usr/local/bin/python3.9


# O(n^2) time | O(1) space
def twoSum( nums, target):
    lenNums = len(nums)
    for i in range(lenNums):
        for j in range(i + 1, lenNums):
            if nums[i] + nums[j] == target:
                return [i, j]


print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3, 2, 4], 6))
print(twoSum([3, 3], 6))


# O(n) time | O(n) space
def twoSumV2( nums, target):
    numsSeen = {}
    for i in range(len(nums)):
        num = nums[i]
        remainder = target - num
        if remainder in numsSeen:
            return [i, numsSeen[remainder]]
        numsSeen[num] = i


print(twoSumV2([2, 7, 11, 15], 9))
print(twoSumV2([3, 2, 4], 6))
print(twoSumV2([3, 3], 6))


