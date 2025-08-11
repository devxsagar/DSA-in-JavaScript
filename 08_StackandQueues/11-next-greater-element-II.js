const n = [1, 2, 3, 4, 3];

/**
 * @param {number[]} n
 * @return {number[]}
 */
var nextGreaterElements = function (n) {
  const arr = [...n, ...n];

  const stack = [];
  const length = arr.length;
  const ans = Array(length);

  ans[length - 1] = -1;
  stack.push(arr[length - 1]);

  for (let i = length - 2; i >= 0; i--) {
    while (stack.length) {
      if (arr[i] >= stack[stack.length - 1]) {
        stack.pop();
      } else {
        ans[i] = stack[stack.length - 1];
        break;
      }
    }

    if (stack.length === 0) {
      ans[i] = -1;
    }

    stack.push(arr[i]);
  }

  return ans.slice(0, n.length);
};

// Approach - 2 (Without doubling the array)
var nextGreaterElements2 = function (n) {
  const stack = []; //stack to store next greater element
  const length = n.length;
  const ans = Array(length); // Result array to store the next greater elements

  // Initialize last element's answer as -1 (no next greater element in circular traversal)
  ans[length - 1] = -1;

  // Push last element to stack as starting point
  stack.push(n[length - 1]);

  // Traverse array in reverse order twice (circular array logic)
  for (let i = 2 * length - 2; i >= 0; i--) {
    while (stack.length) {
      // Pop all elements from stack that are less than or equal to current element
      if (n[i % length] >= stack[stack.length - 1]) {
        stack.pop();
      } else {
        // Found next greater element
        ans[i % length] = stack[stack.length - 1];
        break;
      }
    }

     // If stack is empty, there is no greater element for this position
    if (stack.length === 0) {
      ans[i % length] = -1;
    }

     // Push current element into stack for upcoming comparisons
    stack.push(n[i % length]);
  }

  return ans.slice(0, length);
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

console.log(nextGreaterElements2(n));
