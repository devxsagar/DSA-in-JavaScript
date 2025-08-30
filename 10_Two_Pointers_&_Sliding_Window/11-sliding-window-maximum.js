/**
 *
 * Approach:
 *      1. Use a deque (q) to store elements in decreasing order (front always has the max).
 *
 *      2. For each j:
 *          - Remove smaller elements from the back (they can’t be max anymore).
 *          - Add current element to the deque.
 *
 *      3. Once window size k is reached:
 *          - Record the front (q[0]) as the maximum.
 *          - If the outgoing element (arr[i]) equals the front, remove it.
 *          - Slide window by incrementing i.
 *
 *      4. Then j++ — move window end to next element.
 *
 *      5. At the end return ans.
 *
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (arr, k) {
  const ans = []; // stores final result (max of each window)
  const q = []; // deque to store elements in decreasing order

  let i = 0;
  let j = 0;

  while (j < arr.length) {
    // maintain deque in decreasing order
    // remove all smaller elements from the back (they can't be max anymore)
    while (q.length && arr[j] > q[q.length - 1]) {
      q.pop();
    }

    // add current element to deque
    q.push(arr[j]);

    // when window size >= k
    if (j >= k - 1) {
      // front of deque is the maximum for current window
      ans.push(q[0]);

      // if element going out (arr[i]) is the same as front, remove it
      arr[i] === q[0] && q.shift();

      // slide window
      i++;
    }
     // expand window
    j++;
  }

  return ans;
};

/**
 *  Time Complexity: O(n) -> Outer loop runs n times (length of array).
 *  Space Complexity: O(k) -> q (the deque) stores at most k elements at a time
 */

/** DRY RUN
 * 
 *  arr = [1,3,-1,-3,5,3,6,7], k = 3
 * 
 * j=0: q=[1]               -> window not full yet
 * 
 * j=1: q=[3] (1 popped)    -> window not full yet
 * 
 * j=2: q=[3,-1]            -> window=[1,3,-1], max=3
 * 
 * j=3: q=[3,-1,-3] -> 3 removed as it goes out
 *                          window=[3,-1,-3], max=3
 * 
 * j=4: q=[5] (remove -3,-1 as smaller) 
 *                          window=[-1,-3,5], max=5
 * 
 * j=5: q=[5,3]             -> window=[-3,5,3], max=5
 * 
 * j=6: q=[6] (remove 3,5 as smaller)
 *                            window=[5,3,6], max=6
 *  
 * j=7: q=[7] (remove 6 as smaller)
 *                           window=[3,6,7], max=7
 *  
 * Final ans = [3,3,5,5,6,7]
 */


// Brute Force -> It will give time limit exceed error
var maxSlidingWindow1 = function (arr, k) {
  let l = 0;
  let r = k - 1;
  const maxArr = [];

  while (r < arr.length) {
    let maxN = -Infinity;
    for (let i = l; i <= r; i++) {
      maxN = Math.max(maxN, arr[i]);
    }
    maxArr.push(maxN);
    l++;
    r++;
  }
  return maxArr;
};

const arr = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(arr, k));

/**
 * DEQUE:
 *  - A deque is a linear data structure where you can insert and remove elements from both end
 *    (front and rear).
 *  - It’s more flexible than a queue (FIFO) or stack (LIFO).
 *
 * Operations in a Deque:
 *      - Insert Front → Add element at the beginning.
 *      - Insert Rear → Add element at the end.
 *      - Delete Front → Remove element from the beginning.
 *      - Delete Rear → Remove element from the end.
 *      - Peek Front/Rear → Look at elements without removing.
 */
