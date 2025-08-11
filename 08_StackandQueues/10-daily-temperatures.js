const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (t) {
  const stack = [];           // store indices
  const length = t.length;
  const ans = Array(length);
  ans[length - 1] = 0;        // Last day has no future day, so answer is 0
  stack.push(length - 1);     // Push the last index onto the stack


  for (let i = length - 2; i >= 0; i--) {
    while (stack.length) {
      if (t[i] >= t[stack[stack.length - 1]]) {
        stack.pop(); // pop cooler/equal days
      } else {
        ans[i] = stack[stack.length - 1] - i;  // found warmer day
        break;
      }
    }

     // If stack becomes empty, it means there is no warmer day ahead
    if (stack.length === 0) {
      ans[i] = 0;
    }

    // Push current day index onto stack
    stack.push(i);
  }

  return ans;
};

console.log(dailyTemperatures(temperatures));
