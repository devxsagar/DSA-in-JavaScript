// LeetCode Problem No: 485

function maxConsecutiveOnes(arr) {
  let max = 0; // Stores the maximum number of consecutive 1s found so far
  let count = 0; // Counts the current streak of consecutive 1s

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;   // If current element is 1, increment the current streak
    } else {
      max = Math.max(count, max);  // If current element is 0, update max if current streak is greater
      count = 0; // Reset the current streak counter
    }
  }
  // Final check in case the array ends with a streak of 1s
  return Math.max(count, max);
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1];
const ans = maxConsecutiveOnes(arr);
console.log(ans);
