// LeetCode Problem No: 268

function missingNumberBruteForce(arr) {
  arr = arr.sort((a, b) => a - b);

  if (arr[0] !== 0) return 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i - 1] + 1;
    }
  }
  return arr.length;
}

function missingNumberOptimized(arr) {
  let n = arr.length;
  let total_sum = (n * (n + 1)) / 2;
  let sum_of_array = 0;

  for (let i = 0; i < n; i++) {
    sum_of_array += arr[i];
  }

  return  total_sum - sum_of_array;
}

const arr = [0, 3, 2];
const ans = missingNumberOptimized(arr);
console.log(ans);
