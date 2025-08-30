/**
 *  PROBLEM: Longest Repeating Character Replacement
 *      Given a string s and an integer k, find the length of the longest substring
 *      that can be made to contain all the same characters by changing at most k characters.
 *
 *
 *  APPROACH: Sliding Window with Two Pointers
 *      1. Use two pointers (i, j) to maintain a sliding window
 *      2. Keep track of character frequencies in the current window using a map
 *      3. For each window, check if it's valid: (window_size - max_frequency) <= k
 *         - This means we need at most k replacements to make all characters the same
 *      4. If window is valid, try to expand it by moving right pointer
 *      5. If window is invalid, shrink it by moving left pointer
 *      6. Keep track of the maximum valid window size seen
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// <<---- Approach-1 (Sliding Window + Frequency Map) ---->>
var characterReplacement = function (s, k) {
  let i = 0;
  let j = 0;
  let map = new Map();
  map[s[0]] = 1;
  let maxWindowSize = 0;

  while (j < s.length) {
    if (isWindowValid(map, k)) {
      // calculate current size and update maximum
      let currWindowSize = j - i + 1;
      maxWindowSize = Math.max(maxWindowSize, currWindowSize);

      // Expand window by moving right pointer
      j++;

      // Add new character to frequency map
      if (map[s[j]]) {
        map[s[j]]++;
      } else {
        map[s[j]] = 1;
      }
    } else {
      // Window is invalid - shrink it by moving left pointer
      map[s[i]]--;
      i++;
    }
  }

  return maxWindowSize;
};

// Helper function to check if current window is valid
function isWindowValid(map, k) {
  let totalCount = 0;
  let maxFrequency = 0;

  // Iterate through all possible uppercase letters A-Z
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + 65); // Convert to A-Z

    if (map[char]) {
      totalCount += map[char];
      maxFrequency = Math.max(maxFrequency, map[char]);
    }
  }

  return totalCount - maxFrequency <= k;
}


/** DRY RUN EXAMPLE: characterReplacement("ABAB", 2)
 * 
 * Initial: s = "ABAB", k = 2, i = 0, j = 0, map = {A: 1}, maxWindowSize = 0
 *
 * Step 1: j = 0, window = "A"
 * - map = {A: 1}, totalCount = 1, maxCount = 1
 * - isValid: 1 - 1 = 0 <= 2 ✓
 * - currWindowSize = 0 - 0 + 1 = 1, maxWindowSize = 1
 * - j++, add s[1] = 'B', map = {A: 1, B: 1}
 *
 * Step 2: j = 1, window = "AB"
 * - map = {A: 1, B: 1}, totalCount = 2, maxCount = 1
 * - isValid: 2 - 1 = 1 <= 2 ✓
 * - currWindowSize = 1 - 0 + 1 = 2, maxWindowSize = 2
 * - j++, add s[2] = 'A', map = {A: 2, B: 1}
 *
 * Step 3: j = 2, window = "ABA"
 * - map = {A: 2, B: 1}, totalCount = 3, maxCount = 2
 * - isValid: 3 - 2 = 1 <= 2 ✓
 * - currWindowSize = 2 - 0 + 1 = 3, maxWindowSize = 3
 * - j++, add s[3] = 'B', map = {A: 2, B: 2}
 *
 * Step 4: j = 3, window = "ABAB"
 * - map = {A: 2, B: 2}, totalCount = 4, maxCount = 2
 * - isValid: 4 - 2 = 2 <= 2 ✓
 * - currWindowSize = 3 - 0 + 1 = 4, maxWindowSize = 4
 * - j++, j = 4 (out of bounds, loop ends)
 *
 * Final Result: maxWindowSize = 4
 * Explanation: The entire string "ABAB" can be made uniform by changing 2 characters
 * (either "ABAB" -> "AAAA" or "ABAB" -> "BBBB")
 *
 */

/** APPROACH: Sliding Window with Two Pointers + Array-based Frequency Counter
 *
 * 1. Use two pointers (i, j) to maintain a sliding window
 * 2. Use an array of size 26 to track character frequencies (A-Z mapping to indices 0-25)
 * 3. For each window, check if it's valid: (window_size - max_frequency) <= k
 *    - This means we need at most k replacements to make all characters the same
 * 4. If window is valid, try to expand it by moving right pointer
 * 5. If window is invalid, shrink it by moving left pointer
 * 6. Keep track of the maximum valid window size seen
 *
 * OPTIMIZATION: Using array instead of Map for O(1) character frequency access
 * - charCodeAt(i) - 65 maps 'A'->0, 'B'->1, ..., 'Z'->25
 * - Direct array indexing is faster than Map operations
 */

// <<---- Approach-2 (Sliding Window + Array-based Frequency Counter) ---->>
var characterReplacement = function (s, k) {
  let i = 0;
  let j = 0;

  // Index mapping: A=0, B=1, C=2, ..., Z=25
  let map = Array(26).fill(0);
  map[s.charCodeAt(0) - 65] = 1; // 'A'.charCodeAt(0) = 65, so 65-65 = 0 (index for 'A')
  let maxWindowSize = 0; // Track maximum valid window size found

  while (j < s.length) {
    if (isWindowValid(map, k)) {
      // Window is valid - calculate current size and update maximum
      let currWindowSize = j - i + 1;
      maxWindowSize = Math.max(maxWindowSize, currWindowSize);

      // Try to expand window by moving right pointer
      j++;

      // Increment the count
      map[s.charCodeAt(j) - 65]++;
    } else {
      // Window is invalid - shrink it by moving left pointer
      // Decrement count of left character
      map[s.charCodeAt(i) - 65]--;
      i++;
    }
  }

  return maxWindowSize;
};

// Helper function to check if current window is valid
function isWindowValid(map, k) {
  let totalCount = 0;
  let maxFrequency = 0;

  for (let i = 0; i < 26; i++) {
    totalCount += map[i];
    maxFrequency = Math.max(maxFrequency, map[i]);
  }

  return totalCount - maxFrequency <= k;
}

/**
 *  Time Complexity:
 *      - O(n) where n is the length of string
 *      - isWindowValid function runs in O(1) since we only check 26 uppercase letters
 *
 *  Space Complexity: O(1)
 */

/** DRY RUN EXAMPLE: characterReplacement("ABAB", 2)
 * 
 * Initial: s = "ABAB", k = 2, i = 0, j = 0
 * map = [1,0,0,...,0] (A=1, others=0), maxWindowSize = 0
 * 
 * Step 1: j = 0, window = "A"
 * - map[0] = 1 (A=1), totalCount = 1, maxFrequency = 1
 * - isValid: 1 - 1 = 0 <= 2 ✓
 * - currWindowSize = 0 - 0 + 1 = 1, maxWindowSize = 1
 * - j++, add s[1] = 'B', map[1]++, map = [1,1,0,...,0]
 * 
 * Step 2: j = 1, window = "AB"
 * - map = [1,1,0,...,0], totalCount = 2, maxFrequency = 1
 * - isValid: 2 - 1 = 1 <= 2 ✓
 * - currWindowSize = 1 - 0 + 1 = 2, maxWindowSize = 2
 * - j++, add s[2] = 'A', map[0]++, map = [2,1,0,...,0]
 * 
 * Step 3: j = 2, window = "ABA"
 * - map = [2,1,0,...,0], totalCount = 3, maxFrequency = 2
 * - isValid: 3 - 2 = 1 <= 2 ✓
 * - currWindowSize = 2 - 0 + 1 = 3, maxWindowSize = 3
 * - j++, add s[3] = 'B', map[1]++, map = [2,2,0,...,0]
 * 
 * Step 4: j = 3, window = "ABAB"
 * - map = [2,2,0,...,0], totalCount = 4, maxFrequency = 2
 * - isValid: 4 - 2 = 2 <= 2 ✓
 * - currWindowSize = 3 - 0 + 1 = 4, maxWindowSize = 4
 * - j++, j = 4 (out of bounds, loop ends)
 * 
 * Final Result: maxWindowSize = 4
 * Explanation: The entire string "ABAB" can be made uniform by changing 2 characters
 * (either "ABAB" -> "AAAA" or "ABAB" -> "BBBB")
*/ 

const s = "AABABBA",
  k = 1;
console.log(characterReplacement(s, k));
