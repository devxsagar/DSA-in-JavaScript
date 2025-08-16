var findPeakElement = function (n) {
  let l = 0; // Left pointer
  let r = n.length - 1; // Right pointer

  // Perform binary search until left and right converge
  while (l < r) {
    // Calculate middle index 
    let mid = l + Math.floor((r - l) / 2);

    // If the middle element is less than its right neighbor,
    // the peak must be in the right half
    if (n[mid] < n[mid + 1]) {
      l = mid + 1;
    }
    // Otherwise, the peak is in the left half (including mid)
    else {
      r = mid;
    }
  }

  // At the end, l and r point to the same index — the peak
  return l;
};

const n = [1, 2, 1];
const ans = findPeakElement(n);
console.log(ans);
