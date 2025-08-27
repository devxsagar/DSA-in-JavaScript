/**
 * PROBLEM: Find the length of the longest substring without repeating characters
 *
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let i = (j = 0); // i = left pointer (start of window), j = right pointer (end of window)
  let map = new Map(); // Store character -> most recent index mapping
  let maxWindowSize = 0; // Track maximum window size found so far

  for (let j = 0; j < s.length; j++) {
    // If current character exists in map AND its index is within current window
    if (map[s[j]] !== undefined && map[s[j]] >= i) {
      // Move left pointer to position after the previous occurrence
      i = map[s[j]] + 1;
    }

    // Update current character's index
    map[s[j]] = j;

    // Calculate current window size
    let currWindowSize = j - i + 1;

    // Update maximum window size if current is larger
    maxWindowSize = Math.max(maxWindowSize, currWindowSize);
  }

  return maxWindowSize;
};

/**
 * TIME COMPLEXITY: O(n) - single pass through the string
 * SPACE COMPLEXITY: O(1) - bounded by the size of the character set
 * - Since input consists of English letters, digits, symbols and spaces (ASCII charset)
 * - Maximum 128/256 characters can be stored in the map, which is constant space
 */

/**
 * DRY RUN:
 *      Input: "abcabcbb"
 *      j=0: a, window=[a], size=1
 *      j=1: b, window=[ab], size=2
 *      j=2: c, window=[abc], size=3
 *      j=3: a, found duplicate, i moves to 1, window=[bca], size=3
 *      j=4: b, found duplicate, i moves to 2, window=[cab], size=3
 *      j=5: c, found duplicate, i moves to 3, window=[abc], size=3
 *      j=6: b, found duplicate, i moves to 5, window=[cb], size=2
 *      j=7: b, found duplicate, i moves to 7, window=[b], size=1
 * 
 * Result: 3 (substring "abc")
 */

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
