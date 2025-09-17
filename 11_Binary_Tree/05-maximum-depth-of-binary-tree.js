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
 * @return {number}
 */

// Top-Down Approach 
var maxDepth = function (root) {
  if (!root) return 0;

  let maximumDepth = 0;

  const traversal = (curr, depth) => {
    maximumDepth = Math.max(maximumDepth, depth); // update max depth
    curr.left && traversal(curr.left, depth + 1); // go left
    curr.right && traversal(curr.right, depth + 1); // go right
  };

  traversal(root, 1);

  return maximumDepth;
};

/**
 *  Time Complexity = O(n)
 *  Space Complexity = O(n)
 */

// Bottom Up Approach
var maxDepth = function (root) {
  if (!root) return 0; // base case

  let leftSubTreeMaxDepth = maxDepth(root.left);
  let rightSubTreeMaxDepth = maxDepth(root.right);

  // take max depth of both subtrees and add 1 for current node
  return 1 + Math.max(leftSubTreeMaxDepth, rightSubTreeMaxDepth);
};

/**
 *  Time Complexity = O(n)
 *  Space Complexity = O(n)
 */
