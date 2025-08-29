/**
 *  PROBLEM: Permutation in String (LeetCode 567)
 *  Given two strings s1 and s2, return true if s2 contains any permutation of s1.
 *  A permutation is a rearrangement of characters.
 *
 *
 *  Approach:
 *      1. Create frequency arrays for s1 and initial window of s2
 *      2. Slide window across s2, updating frequencies
 *      3. At each position, compare frequency arrays
 *      4. Return true if match found, false otherwise
 *
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // impossible if s1 is longer than s2
  if (s1.length > s2.length) return false;

  let s1Freq = Array(26).fill(0); // Target frequency (s
  let windowFreq = Array(26).fill(0); // Current window frequency

  // Build frequency arrays for s1 and first window of s2
  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1.charCodeAt(i) - 97]++;
    windowFreq[s2.charCodeAt(i) - 97]++;
  }

  // Sliding window pointers
  let l = 0;
  let r = s1.length - 1;
  while (r < s2.length) {
    // Check if current window is a permutation of s1
    if (isSame(s1Freq, windowFreq)) {
      return true;
    } else {
      windowFreq[s2.charCodeAt(l) - 97]--; // Decrement count of left character
      l++; // Move left pointer
      r++; // Move right pointer
      if (r < s2.length) {
        windowFreq[s2.charCodeAt(r) - 97]++; // Increment count of new right character
      }
    }
  }

  return false;
};

// Helper function to compare two frequency arrays
var isSame = function (s1Freq, windowFreq) {
  for (let i = 0; i < 26; i++) {
    if (s1Freq[i] !== windowFreq[i]) {
      return false;
    }
  }
  return true;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1) - fixed size arrays for 26 lowercase letters
 */


/** DRY RUN:
 * 
 * s1 = "ab", s2 = "eidbaooo"
 * 
 * Initial window: "ei"
 * s1Freq = [1,1,0,0,...] (a=1, b=1)
 * windowFreq = [0,0,0,0,1,1,0,...] (e=1, i=1)
 * Not same -> slide
 * 
 * Window: "id" -> Not same -> slide
 * Window: "db" -> Not same -> slide  
 * Window: "ba" -> Same frequencies as "ab" -> return true
 * */

const s1 = "ab",
  s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));
