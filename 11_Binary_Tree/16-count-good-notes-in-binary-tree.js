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

var goodNodes = function (root) {
  let ans = 0;

  const traversal = (curr, maxSeenSoFar) => {
    // If current node value is equal or greater than
    // max value seen so far then increment ans
    if (curr.val >= maxSeenSoFar) {
      ans++;
    }

    // update new maximum value 
    let currMax = Math.max(curr.val, maxSeenSoFar);

    // recursively call the left and right sub-tree with new max value
    curr.left && traversal(curr.left, currMax);
    curr.right && traversal(curr.right, currMax);
  };

  traversal(root, -Infinity);

  return ans;
};
