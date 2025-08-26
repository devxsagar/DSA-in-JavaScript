/**
 * RAIN WATER TRAPPING PROBLEM
 * Problem: Given an array representing elevation heights, calculate how much
 * rainwater can be trapped after it rains.
 *
 * APPROACH: Two-Pass with Auxiliary Arrays
 *  -> Create maxL[] array - stores maximum height to the left of each position
 *  -> Create maxR[] array - stores maximum height to the right of each position
 *  -> For each position, water trapped = min(maxL[i], maxR[i]) - height[i]
 *  -> Sum up all water trapped at each position
 *
 * @param {number[]} height
 * @return {number}
 */

// <<---- calculate maxL and maxR using one loop ---->>
var trap = function (height) {
  let n = height.length;

  let maxL = [];
  maxL[0] = height[0];

  let maxR = [];
  maxR[n - 1] = height[n - 1];

  // Single loop to fill both arrays simultaneously
  for (let i = 1; i < n; i++) {
    // Fill maxL from left to right (forward direction)
    maxL[i] = Math.max(maxL[i - 1], height[i]);

    // Fill maxR from right to left (reverse indexing)
    maxR[n - 1 - i] = Math.max(height[n - 1 - i], maxR[n - i]);
  }

  // Calculate total water trapped
  waterTrapped = 0;

  for (let i = 0; i < n; i++) {
    let currWater = Math.min(maxL[i], maxR[i]) - height[i];

    waterTrapped += currWater;
  }

  return waterTrapped;
};


// <<---- Calculate maxL & maxR separately ---->>
var trap = function (height) {
  // Calculate maxL (left to right)
  let maxL = [];
  maxL[0] = height[0];

  for (let i = 1; i < height.length; i++) {
    maxL[i] = Math.max(maxL[i - 1], height[i]);
  }

  // Calculate maxR (right to left)
  let maxR = [];
  maxR[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    maxR[i] = Math.max(height[i], maxR[i + 1]);
  }

  // Calculate water trapped
  waterTrapped = 0;

  for (let i = 0; i < height.length; i++) {
    let currWater = Math.min(maxL[i], maxR[i]) - height[i];

    waterTrapped += currWater;
  }

  return waterTrapped;
};

/**
 *  Time Complexity: O(n);
 *  Space Complexity: O(n);
 */

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
