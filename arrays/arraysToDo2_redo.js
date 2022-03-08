function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

arr1 = [1, 2, 3, 4];
console.log(reverse(arr1));
arr1 = [1, 2, 3];
console.log(reverse(arr1));

function rotate(arr, shift) {
  // figure out absolute number of shifts
  let moves = shift % arr.length;
  // iterate through number of moves
  if (moves > 0) {
    console.log(`Positive Moves: ${moves}`);
    for (let i = 0; i < moves; i++) {
      // store last element
      let last = arr[arr.length - 1];
      // mover all other elements to the right one, overwriting last element
      for (let x = arr.length - 1; x >= 0; x--) {
        arr[x] = arr[x - 1];
      }
      // put stored last value in first index now that we've shifted everything over
      arr[0] = last;
    }
  } else {
    console.log(`Negative Moves: ${moves}`);
    for (let i = moves; i < 0; i++) {
      // store first element
      let first = arr[0];
      // mover all other elements to the left one, overwriting last element
      for (let x = 0; x < arr.length; x++) {
        arr[x] = arr[x + 1];
      }
      // put stored last value in first index now that we've shifted everything over
      arr[arr.length - 1] = first;
    }
  }
  return arr;
}

arr1 = [1, 2, 3];
console.log(rotate(arr1, 1));
arr1 = [1, 2, 3];
console.log(rotate(arr1, -1));

function rotateV2(arr, shift) { // say we have a test shift of 1 and -1
  reverseHelper(arr); // reverse array to start eg: [1,2,3] -> [3,2,1]
  let moves = shift % arr.length;
  if (moves > 0) {
    reverseHelper(arr, 0, moves - 1); // reverse first portion [3,2,1]
    reverseHelper(arr, moves, arr.length - 1); // reverse last portion [3,1,2]
  } else { // somethings wrong here -- but moving on for now
    reverseHelper(arr, 0, arr.length - moves); // reverse first portion [2,3,1]
  }
  return arr;
}

function reverseHelper(arr, start = 0, end = arr.length - 1) {
  numIterations = 0;
  for (let i = start; i < (start + end) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[end - numIterations];
    arr[end - numIterations] = temp;
    numIterations++;
  }
}

arr1 = [1, 2, 3];
console.log(rotateV2(arr1, 1));
arr1 = [1, 2, 3];
console.log(rotateV2(arr1, -1));
