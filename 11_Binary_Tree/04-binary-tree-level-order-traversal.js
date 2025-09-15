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
 * @return {number[][]}
 */

// Iterative Approach
var levelOrder = function (root) {
  // If the tree is empty, return an empty array
  if (!root) return [];

  // Initialize queue with the root node
  const queue = [root];
  // This will store the final level order traversal
  const ans = [];

  // Process nodes until queue becomes empty
  while (queue.length) {
    const levelArr = []; // To store all nodes of the current level
    const levelSize = queue.length; // Number of nodes in the current level

    // Process each node in this level
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift(); // Remove the first node from the queue
      curr.left && queue.push(curr.left); // Add left child to the queue (if exists)
      curr.right && queue.push(curr.right); // Add right child to the queue (if exists)
      levelArr.push(curr.val); // Push the current node's value into this level's array
    }

    // After processing the whole level, push it into the result
    ans.push(levelArr);
  }

  return ans;
};

// Recursive Approach
var levelOrder = function (root) {
  // If tree is empty, return an empty array
  if (!root) return [];

  const ans = []; // This will store nodes level by level

  // Recursive helper function
  function traversal(curr, level) {
    // If this level doesn't exist in ans yet, create a new array
    if (!ans[level]) ans[level] = [];

    // Push the current node's value into its level's array
    ans[level].push(curr.val);
    // Recurse on left child with next level
    curr.left && traversal(curr.left, level + 1);
    // Recurse on right child with next level
    curr.right && traversal(curr.right, level + 1);
  }

  // Start traversal from root at level 0
  traversal(root, 0);

  return ans;
};
