// For loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// recursive for loop
function recForLoop(num) {
  // base case
  if (num > 5) {
    return "Done recurring!" // this only returns when the base case is hit
  }
  
  console.log(num);
  return recForLoop(num + 1); // need to make sure every recursive loop returns something
}

console.log(recForLoop(1));


// finding a number in a sorted array with binary search
function binarySearch(arr, num, leftVal, rightVal) {
  if (leftVal > rightVal) {
    return false;
  }
  
  let middle = Math.floor((leftVal + rightVal) / 2)
  console.log(arr[middle])

  if (num === arr[middle]) {
    return true;
  }
  else if (num > arr[middle]) {
    return binarySearch(arr, num, middle + 1, rightVal)
  }
  else {
    return binarySearch(arr, num, leftVal, middle - 1)
  }

}

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(arr, 3, 0, arr.length - 1))