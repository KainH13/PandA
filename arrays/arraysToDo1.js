// Push Front
function pushFront(arr, val) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }

    arr[0] = val;

    return arr;
}

console.log(pushFront([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

// Pop Front
function popFront(arr) {
    let front = arr[0];
    let back = arr[arr.length - 1];
    arr[arr.length - 1] = front;
    arr.pop();

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = back;

    return [arr, front];
}

console.log(popFront([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Pop Front 1
function popFront1(arr) {
    let front = arr[0]; // save front value for output

    // move all values to the left 1, overwriting the front value
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr.pop(); // pop off the extra last value

    return [arr, front];
}

console.log(popFront1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Insert At
function insertAt(arr, idx, value) {
    // shift all elements of the array back one after the index where we want to insert
    for (let i = arr.length - 1; i >= idx; i--) {
        arr[i + 1] = arr[i];
    }
    arr[idx] = value;

    return arr;
}

console.log(insertAt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 5));

// Remove At
function removeAt(arr, idx) {
    let value = arr[idx]; // save value at target index for return

    // shift all elements in array to the left 1 starting directly to the right of the target index
    for (let i = idx + 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr.pop(); // remove extra value at end of array

    return [arr, value];
}

console.log(removeAt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

// Swap Pairs
function swapPairs(arr) {
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length; i += 2) {
            temp = arr[i + 1]; // could also do [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]] in JS
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    } else {
        for (let i = 0; i < arr.length - 1; i += 2) {
            temp = arr[i + 1]; // could also do [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]] in JS
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(swapPairs([1, 2, 3, 4]));
console.log(swapPairs([1, 2, 3]));

// Swap Pairs
function swapPairs1(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        // subtracting 1 from length allows handling even and odd lengths the same
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    return arr;
}

console.log(swapPairs1([1, 2, 3, 4]));
console.log(swapPairs1([1, 2, 3]));

// Remove Duplicates
function removedDuplicates(arr) {
    // remove duplicates from a SORTED array
    let currentVal = arr[0];
    let sortedArr = [arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== currentVal) {
            sortedArr = [...sortedArr, arr[i]];
            currentVal = arr[i];
        }
    }

    return sortedArr;
}

console.log(removedDuplicates([1, 1, 1, 3, 3, 4, 5, 5, 5, 5]));

// Remove Duplicates
function removedDuplicates1(arr) {
    // remove duplicates from a SORTED array
    let currentVal = arr[0];
    let sortedArr = [arr[0]];
    let addIdx = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== currentVal) {
            sortedArr[addIdx] = arr[i];
            addIdx++
            currentVal = arr[i];
        }
    }

    return sortedArr;
}

console.log(removedDuplicates1([1, 1, 1, 3, 3, 4, 5, 5, 5, 5]));
