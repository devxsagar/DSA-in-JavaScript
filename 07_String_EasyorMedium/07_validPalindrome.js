let s = ",; W;:GlG:;l ;,";

var isPalindrome = function (s) {
  // Convert the string to lowercase to make the comparison case-insensitive
  s = s.toLowerCase();

  // Remove all non-alphanumeric characters (keep only a-z and 0-9)
  s = s.replace(/[^a-z0-9]+/g, "");

  // Initialize two pointers: one at the start, one at the end of the string
  let p1 = 0;
  let p2 = s.length - 1;

  // Loop until the two pointers meet in the middle
  while (p1 < p2) {
    // If characters at both pointers don't match, it's not a palindrome
    if (s[p1] !== s[p2]) {
      return false;
    }
    // Move both pointers inward
    p1++;
    p2--;
  }

  // If all characters matched, it's a palindrome
  return true;
};

// Time: O(n), Space: O(n)

var isPalindromeOptimized = function (s) {
  // Convert the string to lowercase for case-insensitive comparison
  s = s.toLowerCase();

  // Initialize two pointers
  let p1 = 0;
  let p2 = s.length - 1;

  // Loop until the two pointers meet
  while (p1 < p2) {
    // Skip non-alphanumeric characters from the left
    if (!s[p1].match(/[a-z0-9]/)) {
      p1++;
    }
    // Skip non-alphanumeric characters from the right
    else if (!s[p2].match(/[a-z0-9]/)) {
      p2--;
    }
    // If both characters are alphanumeric, compare them
    else {
      if (s[p1] !== s[p2]) {
        return false; // Not a palindrome
      }
      // Move both pointers inward
      p1++;
      p2--;
    }
  }

  // All characters matched; it's a palindrome
  return true;
};   

console.log(isPalindromeOptimized(s));
