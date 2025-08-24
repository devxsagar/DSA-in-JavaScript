var threeSum = function (arr) {
  // Sort array to enable two-pointer technique and easy duplicate handling
  arr = arr.sort((a, b) => a - b);

  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    // Skip duplicate values to avoid duplicate triplets
    // Only process if current element is different from previous
    if (arr[i] !== arr[i - 1]) {
      // Find all pairs that sum with arr[i] to make zero
      twoSum(arr, i, ans);
    }
  }

  return ans;
};

// Two-pointer approach to find pairs
function twoSum(arr, x, ans) {
  let l = x + 1;
  let r = arr.length - 1;

  while (l < r) {
    // Calculate sum of current triplet
    let sum = arr[l] + arr[r] + arr[x];

    // Found a valid triplet - add to results
    if (sum === 0) {
      ans.push([arr[l], arr[r], arr[x]]);
      // Move both pointers inward
      l++;
      r--;

      // Skip duplicate values on the left to avoid duplicate triplets
      // This prevents processing the same left value multiple times
      while (arr[l] === arr[l - 1]) {
        l++;
      }
    } else if (sum > 0) {
      // Sum is too large - move right pointer left to decrease sum
      r--;
    } else {
      // Sum is too small - move left pointer right to increase sum
      l++;
    }
  }
}

/**
 * Time Complexity: O(n²) - outer loop O(n) * inner two-pointer O(n)
 * Space Complexity: O(1) - not counting the output array
 */

const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));
