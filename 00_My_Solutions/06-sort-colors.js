/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// <<---- Brute Force ---->>
var sortColors1 = function (nums) {
  // Outer loop: pick one element at a time
  for (let i = 0; i < nums.length - 1; i++) {
    // Inner loop: compare the current element with the rest
    for (let j = i + 1; j < nums.length; j++) {
      // If element at i is greater than element at j, swap them
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
};

/**
 *  Time Complexity: O(n^2)
 *  Space Complexity: O(1)
 */

// <<---- Dutch National Flag Algorithm ---->>
var sortColors = function (nums) {
  let l = 0; // low pointer → boundary for 0's
  let m = 0; // mid pointer → current element
  let h = nums.length - 1; // high pointer → boundary for 2's

  // Process elements until mid crosses high
  while (m <= h) {
    // current is 0: swap with l and move both pointers forward
    if (nums[m] === 0) {
      swap(nums, l, m);
      l++;
      m++;
    } else if (nums[m] === 1) {
      // current is 1: it's already in correct position
      m++;
    } else {
      // current is 2: swap with h and move h backward
      // do not increment m, as swapped value needs to be re-checked
      swap(nums, m, h);
      h--;
    }
  }
};

// Helper function to swap two elements
var swap = function (nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
};

/**
 *  Time Complexity: O(n)
 *  Space Complexity: O(1)
 */

const nums = [1, 2];
console.log(sortColors(nums));
