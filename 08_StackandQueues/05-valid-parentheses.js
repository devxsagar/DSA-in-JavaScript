/**
 * @param {string} s
 * @return {boolean}
 */

//✅ Approach - 1
var isValid = function (s) {
  // Stack to keep track of opening brackets
  let stack = [];

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If the character is an opening bracket, push it to the stack
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      // Pop the last opening bracket from the stack
      let top = stack.pop();

      // If stack is empty (no matching opening) or brackets don't match
      if (
        !top || // No opening bracket to match
        (top === "(" && s[i] !== ")") || // Mismatch for round brackets
        (top === "{" && s[i] !== "}") || // Mismatch for curly brackets
        (top === "[" && s[i] !== "]") // Mismatch for square brackets
      ) {
        return false;
      }
    }
  }

  // If stack is empty at the end, all brackets were matched correctly
  return stack.length === 0;
};

//✅ Approach - 2
var isValid = function (s) {
  // Stack to keep track of opening brackets
  let stack = [];

  // Map of opening brackets to their corresponding closing brackets
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // If the character is an opening bracket
    if (map[s[i]]) {
      stack.push(s[i]); // Push it to the stack
    }
    // If the character is a closing bracket
    else {
      // Pop the last opening bracket from the stack
      let top = stack.pop();

      // If stack is empty or the closing bracket doesn't match the last opening bracket
      if (!top || s[i] !== map[top]) {
        return false;
      }
    }
  }

  // If stack is empty, all brackets matched; otherwise, invalid
  return stack.length === 0;
};


// Time: O(n), Space: O(n) -> because of stack extra space