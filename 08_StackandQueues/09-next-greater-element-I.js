const n1 = [4, 1, 2],
  n2 = [1, 3, 4, 2];

// Approach - 1
var nextGreaterElement = function (n1, n2) {
  const resultArr = [];

  // Loop through each element of n1
  for (let i = 0; i < n1.length; i++) {
    let currElem = n1[i]; // Current element from n1

    // Find the index of current element in n2
    let indexInN2 = n2.indexOf(currElem);

    // Default next greater element as -1 (if none found)
    let nextGreater = -1;

    // Search in n2 for the next greater element
    for (let j = indexInN2 + 1; j < n2.length; j++) {
      if (n2[j] > currElem) {
        nextGreater = n2[j]; // Found the next greater element
        break; // Stop searching once found
      }
    }

    // Store the next greater element (or -1 if not found)
    resultArr.push(nextGreater);
  }

  return resultArr; // Return the final result
};

/**
 * Time: O(n^2) -> outer loop: O(n), inner loop:O(n), indexOf: O(n)
 * Space: O(n) -> because of result array.
 */

// Approach - 2 (optimized)
var nextGreaterElementOptimized = function (n1, n2) {
  let map = {}; // Map to store the next greater element for each number in n2
  let stack = []; // Monotonic decreasing stack (stores potential next greater elements)

  let n = n2.length;

  // Step 1: Handle the last element in n2
  stack.push(n2[n - 1]); // Push last element to stack
  map[n2[n - 1]] = -1; // Last element has no next greater element

  // Step 2: Traverse n2 from right to left (excluding last element)
  for (let i = n - 2; i >= 0; i--) {
    // Step 2.1: Remove elements from the stack that are smaller than current element
    // because they can't be the next greater element
    while (stack.length) {
      if (stack[stack.length - 1] < n2[i]) {
        stack.pop();
      } else {
        // Found the next greater element (top of the stack)
        map[n2[i]] = stack[stack.length - 1];
        break; // No need to check further
      }
    }

    // Step 2.2: If stack is empty → no greater element exists
    if (stack.length === 0) {
      map[n2[i]] = -1;
    }

     // Step 2.3: Push current element to stack (it may be next greater for upcoming elements)
    stack.push(n2[i]);
  }

  //   let resultArr = [];

  //   for (let i = 0; i < n1.length; i++) {
  //     resultArr.push(map[n1[i]]);
  //   }

  //   return resultArr;

  // Step 3: Build the result array for n1 using the precomputed map
  return n1.map((x) => map[x]);
};

console.log(nextGreaterElementOptimized(n1, n2));
