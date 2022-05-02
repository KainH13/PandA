#!/usr/local/bin/python3.9


# O(n^2) time | O(1) space
def maxProfit(prices):
    profit = 0
    lenPrices = len(prices)
    for i in range(lenPrices):
        for j in range(i + 1, lenPrices):
            diff = prices[j] - prices[i]
            if diff > profit:
                profit = diff
    return profit


print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([7,6,4,3,1]))


# O(n) time | O(1) space
def maxProfitV2(prices):
    profit = 0
    left = 0
    right = 1
    while right < len(prices):
        if prices[left] < prices[right]:
            diff = prices[right] - prices[left]
            if diff > profit:
                profit = diff
        else:
            left = right
        right += 1
    return profit


print(maxProfitV2([7,1,5,3,6,4]))
print(maxProfitV2([7,6,4,3,1]))
print(maxProfitV2([1,2,4,2,5,7,2,4,9,0,9]))