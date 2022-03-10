def twoNumberSum(array, targetSum):
    idx = 0
    while idx < len(array):
        val = array[idx]
        for i in range(len(array)):
            if i == idx:
                continue
            if val + array[i] == targetSum:
                return [val, array[i]]
        idx += 1
    return []


array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
print(twoNumberSum(array, targetSum))

def twoNumberSumV2(array, targetSum):
    nums = {}
    for num in array:
        if targetSum - num in nums:
            return [targetSum - num, num]
        if targetSum - num not in nums:
            nums[num] = True
    return []

array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
print(twoNumberSumV2(array, targetSum))