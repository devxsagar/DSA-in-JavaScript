/**
 * @param {number[]} height
 * @return {number}
 */

// <<---- Brute Force Approach ---->>
var maxArea1 = function (height) {
  // Variable to track the maximum water area found so far
  let maxWater = 0;

  // Outer loop: iterate through each possible left boundary
  for (let i = 0; i < height.length - 1; i++) {
    // Inner loop: iterate through each possible right boundary
    for (let j = i + 1; j < height.length; j++) {
      // Area = height of shorter line * distance between lines
      let area = Math.min(height[i], height[j]) * (j - i);

      // Update maxWater if current area is larger than previous maximum
      if (area > maxWater) {
        maxWater = area;
      }
    }
  }

  return maxWater;
};

/**
 * Time Complexity: O(n²);
 * Space Complexity: O(1);
 */

// <<---- Optimized Approach ---->>
var maxArea = function (height) {
  // Initialize two pointers: left at start, right at end
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  // Continue until pointers meet
  while (l < r) {
    // Calculate area between current left and right boundaries
    let area = Math.min(height[l], height[r]) * (r - l);

    // Update maximum water area if current area is larger
    maxWater = Math.max(area, maxWater);

    // Move the pointer with the smaller height inward
    // Logic: Moving the taller line inward can only decrease area
    // Moving the shorter line might find a taller line and increase area
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxWater;
};

/**
 * Time Complexity: O(n) 
 * Space Complexity: O(1)
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
