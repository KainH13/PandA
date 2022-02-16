//  Reverse
function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([1, 2, 3, 4, 5]));

// Rotate
function rotate(arr, shift) {
    if (shift > 0) {
        let rotationsNeeded = shift % arr.length; // makes sure we don't do extra cycles of rotation that don't impact the output
        for (let i = 0; i < rotationsNeeded; i++) {
            let temp = arr[arr.length - 1]; // save value at last index
            // moves elements to the right one index
            for (let k = arr.length - 1; k >= 0; k--) {
                arr[k] = arr[k - 1];
            }
            arr[0] = temp; // put temp value that was overwritten at the beginning
        }
    } else {
        let rotationsNeeded = Math.abs(shift) % arr.length;
        for (let i = 0; i < rotationsNeeded; i++) {
            let temp = arr[0]; // save value at first index
            // move elements to the left one index
            for (let k = 0; k < arr.length - 1; k++) {
                arr[k] = arr[k + 1];
            }
            arr[arr.length - 1] = temp; // put temp value that was overwritten at the end
        }
    }

    return arr;
}

console.log(rotate([1, 2, 3], 1));
console.log(rotate([1, 2, 3], -1));

// Rotate with helper
// helper
function reverseArr(arr, startingInd = 0, endingInd = arr.length - 1) {
    let numIterations = 0; // num of full iterations for following for loop
    for (var k = startingInd; k < (startingInd + endingInd) / 2; k++) {
        let temp = arr[k];
        arr[k] = arr[endingInd - numIterations];
        arr[endingInd - numIterations] = temp;
        numIterations++;
    }
}

// function
function rotateV2(arr, shift) {
    reverseArr(arr);
    let movesNeeded;
    if (shift > 0) {
        movesNeeded = shift % arr.length;
        reverseArr(arr, 0, movesNeeded - 1);
        reverseArr(arr, movesNeeded);
    } else {
        reverseArr(arr, 0, arr.length - movesNeeded - 1);
        reverseArr(arr, arr.length - movesNeeded);
    }

    return arr;
}

console.log(rotateV2([1, 2, 3], 1));
console.log(rotateV2([1, 2, 3], -1));

// Filter Range
function filterRange(arr, min, max) {
    // for each item in array
    for (let i = 0; i < arr.length; i++) {
        // if less than min or greater than max
        if (arr[i] < min || arr[i] > max) {
            // shift all values after the current index to the left one
            for (let k = i; k < arr.length - 1; k++) {
                arr[k] = arr[k + 1];
            }
            // decrease the length of the array
            arr.length--;
            // to keep the loop pointed at the same index that we just shifted everything into
            i--;
        }
    }

    return arr;
}

console.log(filterRange([1, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8));

// Filter Range v2
function filterRangeV2(arr, min, max) {
    // index where next array value that's from min to max will go
    var nextInd = 0;
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[nextInd] = arr[i]; // put this value into the array at the next available index
            nextInd++; // move the next target index forward one
        }
    }
    arr.length = nextInd; // chop off the extra values

    return arr;
}

console.log(filterRangeV2([1, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8));

// Concat
function concat(arr1, arr2) {
    let newArr = [];
    let targetInd = 0; // where items from other arrays should be placed in new array

    // place arr1 items in new array in order
    for (let i = 0; i < arr1.length; i++) {
        newArr[targetInd] = arr1[i];
        targetInd++;
    }

    // place arr2 items in new array in order
    for (let i = 0; i < arr2.length; i++) {
        newArr[targetInd] = arr2[i];
        targetInd++;
    }

    return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));

// Concat with redundancy removed
// helper function
function buildFrom(arrayToBuild, arrayFrom) {
    let curInd = arrayToBuild.length;
    // loop to add values to the new array
    for (var i = 0; i < arrayFrom.length; i++) {
        arrayToBuild[curInd] = arrayFrom[i];
        curInd++;
    }
}

function concatV2(arr1, arr2) {
    let newArr = [];
    buildFrom(newArr, arr1); // add values from arr1 to new array
    buildFrom(newArr, arr2); // add values form arr2 to new array
    return newArr;
}

console.log(concatV2([1, 2, 3], [4, 5, 6]));
