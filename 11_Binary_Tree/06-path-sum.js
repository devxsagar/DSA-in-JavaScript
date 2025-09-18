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
 * @param {number} targetSum
 * @return {boolean}
 */

// Top-Down Approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false; // tree is empty, no path exists
  let ans = false;

  const traverse = (curr, currSum) => {
    // add current node value to running sum
    let newSum = currSum + curr.val;

    // if it's a leaf node, mark ans true if path sum matches
    if (!curr.left && !curr.right) {
      if (newSum === targetSum) {
        ans = ans || true;
      }
    }

    // recursively check left and right subtrees
    curr.left && traverse(curr.left, newSum);
    curr.right && traverse(curr.right, newSum);
  };

  traverse(root, 0);

  return ans;
};

// Bottom-Up Approach
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  // if it's a leaf → check if remaining target matches node value
  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  // subtract current node's value from target
  // and recurse into left & right subtrees
  let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
  let rightSubTreeHasPathSum = hasPathSum(root.right, targetSum - root.val);

  // return true if either subtree has a valid path sum
  return leftSubTreeHasPathSum || rightSubTreeHasPathSum;
};
