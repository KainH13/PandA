function pushFront(arr, val) {
  // move all elements to the right one
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  // add new value to front
  arr[0] = val;
  return arr;
}

arr1 = [1, 2, 3, 4, 5];
console.log(pushFront(arr1, 0));

function popFront(arr) {
  front = arr[0]; // save first value for return

  // move everything down an index overwriting that first value
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.pop(); // remove last value
  console.log(arr);
  return front;
}

arr1 = [1, 2, 3];
console.log(popFront(arr1));

function insertAt(arr, idx, val) {
  // starting at arr[idx], move all elements up one index to make room for insertion
  for (let i = arr.length - 1; i >= idx; i--) {
    arr[i + 1] = arr[i];
  }
  arr[idx] = val; // insert value at target index
  return arr;
}

arr1 = [1, 2, 3];
console.log(insertAt(arr1, 1, 2));

function removeAt(arr, idx) {
  // move all values down one index starting at idx
  for (let i = idx; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return arr;
}

arr1 = [1, 2, 3];
console.log(removeAt(arr1, 1));

function swapPairs(arr) {
  // iterate through array in pairs swapping values as we go
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

arr1 = [1, 2, 3];
console.log(swapPairs(arr1));
arr2 = [1, 2, 3, 4];
console.log(swapPairs(arr2));

function removeDups(arr) {
  // iterate through and find duplicates
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      // if a duplicate is found to the right
      // remove value at the current index
      while (arr[i] === arr[i + 1]) {
        removeAt(arr, i + 1);
      }
    }
  }
  return arr;
}

arr1 = [1, 2, 2, 2, 3, 4, 5, 6, 6, 10];
console.log(removeDups(arr1));

function removeDupsEfficiently(arr) {
  if (arr.length <= 1) {
    return;
  }
  let lastUniqueVal = arr[0];
  let nextUniqueInd = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== lastUniqueVal) {
      lastUniqueVal = arr[i];
      arr[nextUniqueInd] = arr[i];
      nextUniqueInd++;
    }
  }
  arr.length = nextUniqueInd;
  return arr;
}

arr1 = [1, 2, 2, 2, 3, 4, 5, 6, 6, 10];
console.log(removeDupsEfficiently(arr1));
