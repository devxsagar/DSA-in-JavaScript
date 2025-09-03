/**
 * LeetCode: 53
 *
 * @param {number[]} nums
 * @return {number}
 */

/** Approach:
 * 
 *  1. Initialize two variables
 *      - sum → to keep the current subarray sum (start with 0)
 *      - max → to keep the maximum sum found so far (start with -∞)
 * 
 *  2. Iterate through each element of the array
 *      - Add the current element to sum.
 *      - Update max as the maximum of (max, sum).
 *      - If sum becomes negative, reset it to 0 (because continuing a negative sum will only decrease future totals).
 * 
 *  3. After the loop ends, return max as the result.
 */


// <<--- Kadane’s Algorithm ---->>
var maxSubArray = function (nums) {
  let sum = 0;

  // Start with -Infinity to handle cases where all numbers are negative
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);

    // If running sum becomes negative, reset it to 0
    if (sum < 0) sum = 0; 
  }

  return max;
};


/**
 *  Time Complextiy: O(n)
 *  Space Complexity: O(1)
 */



/** Dry Run:
 * 
 * Array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

 * sum = 0, max = -∞
 * 
 * Add -2 → sum = -2 → reset → sum = 0, max = -2
 * 
 * Add 1 → sum = 1, max = 1
 * 
 * Add -3 → sum = -2 → reset → sum = 0, max = 1
 * 
 * Add 4 → sum = 4, max = 4
 * 
 * Add -1 → sum = 3, max = 4
 * 
 * Add 2 → sum = 5, max = 5
 * 
 * Add 1 → sum = 6, max = 6 ✅
 * 
 * Add -5 → sum = 1, max = 6
 * 
 * Add 4 → sum = 5, max = 6

 * Answer = 6
 */


const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
