var search = function (n, target) {
  // initialize left and right pointers
  let l = 0;
  let r = n.length - 1;

  while (l <= r) {
    // calculate mid
    let mid = l + Math.floor((r - l) / 2);

    // if target found at mid, return its index
    if (n[mid] === target) {
      return mid;
    }

    // Check if left half [l ... mid] is sorted
    if (n[l] <= n[mid]) {
      // target is within the sorted left half
      if (target < n[mid] && target >= n[l]) {
        r = mid - 1; // move to left half
      } else {
        l = mid + 1; // move to right half
      }
    }
    // else, right half [mid ... r] must be sorted
    else {
      // target is within the sorted right half
      if (target > n[mid] && target <= n[r]) {
        l = mid + 1; // move to right half
      } else {
        r = mid - 1; // move to left half
      }
    }
  }

  // target not found
  return -1;
};

/**
 *  Time Complexity: O(logn);
 *  Space Complexity: O(1);
 */

const n = [4, 5, 6, 7, 0, 1, 2], target = 7;
const ans = search(n, target);
console.log(ans);
