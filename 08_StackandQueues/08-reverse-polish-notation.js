const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []; // Stack to store numbers

  for (let i = 0; i < tokens.length; i++) {
    // If the current token is an operator
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" ||
      tokens[i] === "/" ||
      tokens[i] === "*"
    ) {
      // Pop the top two numbers from the stack
      let fv = stack.pop(); // First value (right operand)
      let sv = stack.pop(); // Second value (left operand)
      let ans = 0;

      // Perform the corresponding operation
      if (tokens[i] === "/") {
        // Use Math.trunc to truncate decimal towards zero
        ans = Math.trunc(Number(sv) / Number(fv));
      } else if (tokens[i] === "+") {
        ans = Number(sv) + Number(fv);
      } else if (tokens[i] === "*") {
        ans = Number(sv) * Number(fv);
      } else {
        ans = Number(sv) - Number(fv);
      }

      // Push the result back onto the stack
      stack.push(ans);
    } else {
      // If the token is a number, push it onto the stack
      stack.push(tokens[i]);
    }
  }

  // Return the final result (only element left in the stack)
  return Number(stack.pop());
};

console.log(evalRPN(tokens));

/**
 * Time: O(n)
 * Space: O(n)
 */
