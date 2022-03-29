#!/usr/local/bin/python3.9

# O(nlogn) time | O(1) space
# Greedy solution - always execute in the order of increasing duration
def minimumWaitingTime(queries):
    # sort input array
    queries.sort()
    # store total waiting time
    total = 0
    # iterate through sorted input array
    for i in range(len(queries)):
        # multiply the number of queries left by the duration of the current query to get wait time added
        total += queries[i] * (len(queries) - (i + 1))
    return total

queries = [3,2,1,2,6]
print(minimumWaitingTime(queries))