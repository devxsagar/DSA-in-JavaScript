/**
 * LeetCode: 169
 * 
 * @param {number[]} nums
 * @return {number}
 */

// <<---- Frequency Map Approach ---->>
var majorityElement = function (nums) {
  // Object to store frequency of each number
  let freq = {};

  // Track the max frequency seen so far
  let max = 0;

  // Track the number that appears most frequently
  let majority = nums[0];

  for (let i = 0; i < nums.length; i++) {
    // If number not in freq, initialize with 1
    // Otherwise increment its count
    if (!freq[nums[i]]) {
      freq[nums[i]] = 1;
    } else {
      freq[nums[i]]++;
    }

    // Update majority element if current number’s frequency is higher
    if (freq[nums[i]] > max) {
      max = freq[nums[i]];
      majority = nums[i];
    }
  }

  return majority;
};

/**
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
 */


/** Approach:
 * 
 *  1. Start with no chosen element(candidate) and no votes(count).
 *  2. Go through each element in the array one by one.
 *  3. If there are no votes left (count == 0):
 *          - Choose the current element as the new candidate.
 *          - Give it one vote. (count = 1)
 *  4. If the current element is the same as the chosen one:
 *          -  Add a vote.
 *  5. If the current element is different:
 *          - Remove a vote.
 *  6. Continue until the end of the array.
 *  7. The element left as the chosen one(candidate) at the end will be the majority element.
 */

// <<--- Boyer–Moore Voting Algorithm ---->>
var majorityElement = function (nums) {
  // keeps track of votes for the current candidate
  let count = 0;

  // potential majority element
  let candidate = 0;

  for (let i = 0; i < nums.length; i++) {
    // If no current candidate, pick nums[i] as the new candidate
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else {
      if (nums[i] === candidate) {
        count++; // Same element → reinforce the candidate
      } else {
        count--; // Different element → cancel out one vote
      }
    }
  }

  // After the loop, candidate will be the majority element
  // (since it appears more than n/2 times and cannot be fully cancelled out)
  return candidate;
};

/**
 *  Time Complexity: O(n)
 *  Space Complexity: O(1)
 */

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
