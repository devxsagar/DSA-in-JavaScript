var longestCommonPrefix = function (s) {
  let x = 0; // Initialize a pointer to track the current character index

  // Loop until we reach the end of the first string
  while (x < s[0].length) {
    let ch = s[0][x]; // Get the current character from the first string

    // Compare this character with the corresponding character in all other strings
    for (let i = 1; i < s.length; i++) {
      // If characters don't match or if current index exceeds any string's length
      if (s[i][x] !== ch || x === s[i].length) {
        // Return the common prefix found so far
        return s[0].substring(0, x);
      }
    }

    x++; // Move to the next character index
  }

  // If loop completes, the entire first string is the common prefix
  return s[0];
};

const s = ["flower", "flow", "flight"];
