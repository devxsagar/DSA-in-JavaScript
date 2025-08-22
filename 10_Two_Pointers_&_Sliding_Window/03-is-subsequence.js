/**
 * Is Subsequence
 * Determines if string s is a subsequence of string t.
 * A subsequence maintains the relative order of characters but they don't need to be contiguous.
 * Example: "ace" is a subsequence of "abcde" (a-c-e appear in order)
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function (s, t) {
  // Pointer for string s (subsequence we're looking for)
  let i = 0;
  // Pointer for string t (main string we're searching in)
  let j = 0;

  // Iterate through the entire main string t
  while (j < t.length) {
    // If characters match, move pointer in subsequence string forward
    if (s[i] === t[j]) {
      i++;
    }
    j++; // Always move pointer in main string forward
  }

  // i === s.length means we found all characters of s in order within t
  return i === s.length;
};

/**
 * Time Complexity: O(n) where n is the length of string t
 * Space Complexity: O(1) - only using two pointers
 */

const s = "abx",
  t = "ahbgdc";
console.log(isSubsequence(s, t));
