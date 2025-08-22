/**
 * Two Sum II - Input array is sorted
 * Given a 1-indexed array of integers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * 
 * @param {*} numbers 
 * @param {*} target 
 * @returns {number[]}
 */

// <<---- Solution ---->>
var twoSum = function (numbers, target) {
  // Initialize two pointers: left at start, right at end
  let l = 0;
  let r = numbers.length - 1;

  // Continue until pointers meet
  while (l < r) {
    // Calculate current sum of elements at both pointers
    let sum = numbers[l] + numbers[r];

    // Found the target sum - return 1-based indices
    if (sum === target) {
      return [l + 1, r + 1];
    }
    // Sum is too large - move right pointer left to decrease sum
    else if (sum > target) {
      r--;
    }
    // Sum is too small - move left pointer right to increase sum
    else {
      l++;
    }
  }
};

/**
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using two pointers
 */

const numbers = [0, 0, 3, 4],
  target = 0;
console.log(twoSum(numbers, target));
