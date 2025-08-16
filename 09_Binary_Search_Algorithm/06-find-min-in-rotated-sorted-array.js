var findMin = function (n) {
  let l = 0; // left pointer
  let r = n.length - 1; // right pointer

  while (l <= r) {
    // if the subarray from l to r is already sorted,
    // then the smallest element is at the leftmost index
    if (n[l] <= n[r]) {
      return n[l];
    }

    // calculate mid index
    let mid = l + Math.floor((r - l) / 2);

    // check if mid itself is the rotation point (smallest element)
    // this happens if the element at mid is less than the one before it
    if (n[mid] < n[mid - 1]) {
      return n[mid];
    }

    // decide which half to search next:
    // if left part is unsorted → pivot lies to the left
    if (n[l] > n[mid]) {
      r = mid - 1; // move search to left half
    } 
    // else → left part is sorted, so pivot is in right half
    else {
      l = mid + 1;
    }
  }
};

const n = [2, 1];
const ans = findMin(n);
console.log(ans);
