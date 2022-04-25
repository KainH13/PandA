#!/usr/local/bin/python3.9

# O(nlogn) time | O(1) space
def classPhotos(redShirtHeights, blueShirtHeights):
    # sort input arrays in descending order
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reverse=True)
    # figure out which row goes in front -- based on largest value in each array
    if redShirtHeights[0] == blueShirtHeights[0]:
        return False
    elif redShirtHeights[0] > blueShirtHeights[0]:
        front = blueShirtHeights
        back = redShirtHeights
    else:
        front = redShirtHeights
        back = blueShirtHeights
    # then check that each height in the back row is greater than that at the same index in the front row
    for i in range(len(back)):
        if back[i] <= front[i]:
            return False
    return True

redShirtHeights = [5, 8, 1, 3, 4]
blueShirtHeights = [6, 9, 2, 4, 5]
print(classPhotos(redShirtHeights, blueShirtHeights))