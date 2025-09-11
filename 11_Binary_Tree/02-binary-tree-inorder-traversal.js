/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursive Approach
var inorderTraversal = function (root) {
  const ans = []; // stores traversal result

  function traversal(curr) {
    if (!curr) return; // base case: null node

    traversal(curr.left); // go left
    ans.push(curr.val); // visit node
    traversal(curr.right); // go right
  }

  traversal(root); // start from root

  return ans;
};

// Iterative Approach
var inorderTraversal = function (root) {
  const stack = []; // Stack to keep track of nodes
  const ans = []; // Result array to store inorder traversal
  let curr = root; // Start with the root node

  // Traverse until both stack is empty AND current node is null
  while (curr || stack.length) {
    // Go as far left as possible, pushing nodes onto the stack
    while (curr) {
      stack.push(curr); // Push current node to stack before going left
      curr = curr.left; // Move to left child
    }

    curr = stack.pop(); // Pop the last node from the stack
    ans.push(curr.val); // Add the node’s value to the result
    curr = curr.right; // Move to the right child of the node
  }

  return ans;
};
