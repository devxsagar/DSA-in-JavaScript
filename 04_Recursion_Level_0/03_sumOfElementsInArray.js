const arr = [1, 2, 3, 4, 5, 10];

//✅ Sum of all elements in the array
function sum(n) {
  if (n === 0) return arr[0];

  return arr[n] + sum(n - 1);
}

// ✅ Sum of Odd elements in the array
function sumOfOddNumber(n) {
  let isOdd = arr[n] % 2 !== 0;

  // Base condition
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }

  // Recursive condition
  return (isOdd ? arr[n] : 0)  + sumOfOddNumber(n - 1);
}

const ans = sumOfOddNumber(arr.length - 1);
console.log(ans);
