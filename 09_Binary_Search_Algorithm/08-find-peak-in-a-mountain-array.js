// Approach -> Linear Search
var peakIndexInMountainArray1 = function (arr) {
  let maxVal = -Infinity;
  let peakIndex = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    maxVal = Math.max(maxVal, arr[i]);
    if (maxVal === arr[i]) {
      peakIndex = i;
    }
  }

  return peakIndex;
};

// Approach -> Binary Search
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    // If the next element is greater than current one,
    // it means we are still in the ascending part of the mountain.
    // So, move search to the right side.
    if (arr[mid + 1] > arr[mid]) {
      l = mid + 1;
    }
    // Otherwise, we are in the descending part (or at the peak).
    // So, move search to the left side including mid.
    else {
      r = mid;
    }
  }

  // At the end, l == r → index of the peak element
  return r;
};

/**
 *  Time Complexity: O(log n)
 *  Space Complexity: O(1)
 */

const arr = [0, 1, 6, 4, 3, 2, 1, 0];
console.log(peakIndexInMountainArray(arr));
