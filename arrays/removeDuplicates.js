function removeDups(arr) {
  lastUniqueVal = arr[0];
  nextUniqueIndex = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== lastUniqueVal) {
      lastUniqueVal = arr[i];
      arr[nextUniqueIndex] = arr[i];
      nextUniqueIndex++;
    }
  }
  arr.length = nextUniqueIndex;
  return arr;
}

arr1 = [1, 2, 2, 2, 3, 4, 6, 6, 10];
console.log(removeDups(arr1));
