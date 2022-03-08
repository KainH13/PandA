function minToFront(arr) {
  // save minimum
  let min = arr[0]
  let minIdx = 0
  // find minimum
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
      minIdx = i
    }
  }
  // shift everything at a lower index than min into mins spot
  for (let i = minIdx; i >= 1; i--) {
    arr[i] = arr[i - 1]
  }
  // set first index to min value
  arr[0] = min
  return arr
}

arr1 = [1,2,0,3]
console.log(minToFront(arr1))
