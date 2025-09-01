/**
 * LeetCode: 1752
 * 
 * @param {number[]} arr
 * @return {boolean}
 * 
 * 🧠 Key Idea:
 *      - In a sorted array → elements always increase (no "drops").
 *      - In a sorted but rotated array → there can be only 1 drop (where order breaks).
 *      - If there are 2 or more drops → it’s not sorted + rotated.
 */


var check = function (arr) {
  let count = 0;
  let n = arr.length;

  // Traverse the array and count how many times the order "drops"
  for (let i = 0; i < n; i++) {
    // Using modulo (%) ensures the last element compares with the first.
    if (arr[i] > arr[(i + 1) % n]) {
      count++;
    }
  }

  // If there is at most 1 drop, the array is sorted and rotated
  return count <= 1;
};

/**
 *  Time Complexity: O(n)
 *  Space Complexity: O(1)
 */


const arr = [6, 10, 6];
console.log(check(arr));
