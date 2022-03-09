function removeNegatives(arr) {
  currentIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      arr[currentIdx] = arr[i];
      currentIdx++;
    }
  }
  arr.length = currentIdx;

  return arr;
}

arr1 = [-1, -2, 0, 1, 2];
console.log(removeNegatives(arr1));

function secondToLast(arr) {
  return arr[arr.length - 2];
}

arr1 = [1, 2, 3, 4];
console.log(secondToLast(arr1));

function secondLargest(arr) {
  if (arr.length <= 1) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

arr1 = [42, 1, 4, Math.PI, 7];
console.log(secondLargest(arr1));

function nthToLast(arr, n) {
  return arr[arr.length - n - 1];
}

arr1 = [1, 2, 3, 4];
console.log(nthToLast(arr1, 2));
