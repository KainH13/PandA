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
    left = 0 # Buy
    right = 1 # Sell
    max_profit = 0
    while right < len(prices):
        if prices[left] < prices[right]:
            currentProfit = prices[right] - prices[left] #our current Profit
            max_profit = max(currentProfit,max_profit)
        else:
            left = right
        right += 1
    return max_profit


print(maxProfitV2([7,1,5,3,6,4]))
print(maxProfitV2([7,6,4,3,1]))
print(maxProfitV2([1,2,4,2,5,7,2,4,9,0,9]))