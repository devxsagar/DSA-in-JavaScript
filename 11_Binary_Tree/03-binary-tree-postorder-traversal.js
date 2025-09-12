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
var postorderTraversal = function (root) {
  let ans = []; // stores traversal result

  function traversal(curr) {
    if (!curr) return; // base case: null node

    traversal(curr.left); // go left
    traversal(curr.right); // go right
    ans.push(curr.val); // visit node
  }

  traversal(root); // start from root

  return ans;
};

// Iterative Approach Using Two Stack
var postorderTraversal = function (root) {
  if (!root) return [];

  // stack1 is used for traversal, stack2 is used to reverse the order
  const stack1 = [root];
  const stack2 = [];

  while (stack1.length) {
    // Pop from stack1 and push to stack2
    let curr = stack1.pop();
    stack2.push(curr);

    // Push left and right children into stack1
    // (Left first, then right → ensures correct order after reversal)
    curr.left && stack1.push(curr.left);
    curr.right && stack1.push(curr.right);
  }

  // Build the result in postorder by popping from stack2
  const ans = [];
  while (stack2.length) {
    ans.push(stack2.pop().val);
  }

  return ans;
};

/**
 *  Time Complexity = O(n)
 *  Space Complexity = O(n)
 */

// Iterative Approach Using One Stack
var postorderTraversal = function (root) {
  const ans = []; // Result array to store postorder traversal
  const stack = []; // Stack to simulate recursion
  let curr = root; // Start with root node
  let lastVisitedNode = null; // Keeps track of the last visited node

  while (stack.length || curr) {
    // Go as left as possible (like inorder)
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    // Peek the top node (but don't pop yet)
    let peekNode = stack[stack.length - 1];

    // If right child exists and is not processed yet → go right
    if (peekNode.right && peekNode.right !== lastVisitedNode) {
      curr = peekNode.right;
    } else {
      // Otherwise, process the node
      ans.push(peekNode.val);
      // Mark this node as last visited
      lastVisitedNode = stack.pop();
    }
  }

  return ans;
};

/**
 *  Time Complexity = O(n)
 *  Space Complexity = O(h), h is the height of the tree.
 */
