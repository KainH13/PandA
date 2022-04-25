def nonConstuctibleChange(coins):
    coins.sort() # sort array so we know we're moving through increasing values
    currentChange = 0 # store the current highest change we can make

    for coin in coins:
        if coin > currentChange + 1:
            return currentChange + 1
        currentChange += coin

    return currentChange + 1

coins = [5, 7, 1, 1, 2, 3, 22]
print(nonConstuctibleChange(coins))
