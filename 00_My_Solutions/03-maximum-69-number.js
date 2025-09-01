var maximum69Number = function (num) {
  // Convert the number to a string so we can modify individual digits
  num = num.toString();

  // Loop through each digit from left to right
  for (let i = 0; i < num.length; i++) {
    // If we find the first occurrence of '6'
    if (num[i] === "6") {
      // Replace it with '9' using slice to create a new string
      num = num.slice(0, i) + "9" + num.slice(i + 1);
      break; // Only change the first '6' found, then stop
    }
  }

  // Convert the modified string back to a number and return it
  return Number(num);
};

/**
 *  Time Complexity: O(n) where n = number of digits in num.
 *  Space Complexity: O(1) num can have at most 4 digits.
 */

const num = 9669;
console.log(maximum69Number(num));
