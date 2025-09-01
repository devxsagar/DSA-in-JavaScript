/** LeetCode: 189
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {void} Do not return anything, modify arr in-place instead.
 */

/** Approach
 *      - If k >= n, rotating n times gives back the original array. So, reduce k = k % n.
 *      - Save the last element of the array (because it will be lost during shifting).
 *      - Shift every element from the second-last down to the first → one step to the right.
 *      - Place the saved last element at index 0.
 *      - After k iterations, the array is rotated by k steps to the right.
 */

// <<---- Brtute Force ---->>
var rotate1 = function (arr, k) {
  let n = arr.length;

  // Reduce k because rotating n times = original array
  k = k % n;
  console.log(k);
  for (let i = 0; i < k; i++) {
    // Save the last element (it will move to the front)
    let lastElem = arr[n - 1];

    // Shift all elements one step to the right
    for (let j = n - 1; j >= 0; j--) {
      arr[j] = arr[j - 1];
    }

    // Place the last element at the front
    arr[0] = lastElem;
  }
};

/**
 *  Time Complexity: O(n × k) -> k = outer loop, n = inner loop
 *  Space Complexity: O(1)
 */


/** Approach
 *      - Reverse the last k elements.
 *      - Reverse the first n-k elements.
 *      - Reverse the entire array.
 */

// <<---- Reversal Algorithm ---->>
var rotate = function (arr, k) {
  let n = arr.length;

  // Reduce k because rotating n times = original array
  k = k % n;

  // Reverse the last k elements
  // Example: [1,2,3,4,5,6,7], k=3  → reverse(4..6) → [1,2,3,4,7,6,5]
  reverse(n - k, n - 1, arr);

  //Reverse the first (n-k) elements
  // Example: [1,2,3,4,7,6,5] → reverse(0..3) → [4,3,2,1,7,6,5]
  reverse(0, n - k - 1, arr);

  // Reverse the entire array
  // Example: [4,3,2,1,7,6,5] → reverse(0..6) → [5,6,7,1,2,3,4]
  reverse(0, n - 1, arr);
};

// Helper function to reverse elements between indices i and j
var reverse = function (i, j, arr) {
  while (i < j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j--;
  }
};

/**
 *  Time Complexity: O(n)
 *  Space Complexity: O(1)
 */

const arr = [1, 2],
  k = 1;
rotate(arr, k);
