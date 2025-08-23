/**
 *
 * @param {*} haystack
 * @param {*} needle
 * @returns {number}
 */

var strStr1 = function (haystack, needle) {
  // Calculate the last valid starting position to avoid out-of-bounds access
  let searchBound = haystack.length - needle.length;

  // Iterate through each possible starting position in haystack
  for (let i = 0; i <= searchBound; i++) {
    let j = 0;

    // Check if needle matches haystack starting at position i
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break; // Mismatch found, try next starting position
      }
    }

    // If we matched all characters in needle, return the starting index
    if (j === needle.length) {
      return i;
    }
  }

  // Needle not found in haystack
  return -1;
};

/**
 *  Time Complexity: O(n * m) where n = haystack.length, m = needle.length;
 *  Space Complexity: O(1) - only using a constant amount of extra space;
 */



/**
 *  -> Knuth Morris Pratt(KMP) is String Searching Algorithm.
 */

// <<---- Knuth Morris Pratt(KMP) Algorithm ---->>
var strStr = function (haystack, needle) {
  // Step 1: Build the LPS (Longest Prefix Suffix) array for the needle
  let i = 0;  // pointer for prefix
  let j = 1; // pointer for suffix
  const lps = [0]; // LPS array, first element is always 0

  // Build LPS array using two pointers
  while (j < needle.length) {
    // Characters match, extend the current prefix
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        lps[j] = 0; // No prefix match, set LPS[j] = 0
        j++;
      } else {
        // Fall back to previous prefix using LPS array
        // This is the key optimization of KMP
        i = lps[i - 1];
      }
    }
  }

  // Step 2: Use the LPS array to search for needle in haystack
  i = j = 0; // Reset pointers: i for haystack, j for needle

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      // Characters match, move both pointers forward
      i++;
      j++;
    } else {
      if (j === 0) {
        // No partial match, just move haystack pointer 
        i++;
      } else {
        // Move needle pointer back using LPS
        j = lps[j - 1];
      }
    }

    // Check if we found a complete match
    if (j === needle.length) {
      return i - needle.length;  // Return starting index of match
    }
  }

  return -1; // No match found
};

/**
 * Time complexity: O(n + m) where n = haystack length, m = needle length
 * Space complexity: O(m) for the LPS array
 */


const haystack = "leetcode",
  needle = "leeto";
console.log(strStr(haystack, needle));
