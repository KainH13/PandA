// recursive function that returns the sum of number from 1 to a given input
function rSigma(num) {
  if (num > 0) {
    return rSigma(num - 1) + num;
  }
  return 0;
}

console.log(rSigma(3));
console.log(rSigma(-1));
console.log(rSigma(0));

// recursive factorial
function rFactorial(num) {
  if (num > 1) {
    return rFactorial(Math.trunc(num) - 1) * Math.trunc(num);
  }
  return 1;
}

console.log(rFactorial(3));
console.log(rFactorial(-1));
console.log(rFactorial(0));
