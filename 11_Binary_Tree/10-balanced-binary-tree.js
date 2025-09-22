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
 * @return {boolean}
 */

var isBalanced = function (root) {
  let ans = true;
  const calculateHeight = (curr) => {
    if (!curr) return 0; // base case

    let leftHeight = calculateHeight(curr.left); // recursively get left height
    let rightHeight = calculateHeight(curr.right); // recursively get right height

    // check balance condition at this node
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = ans && false; // if difference > 1 → not balanced
    }

    // height of current node = 1 + max(left, right)
    return 1 + Math.max(leftHeight, rightHeight);
  };

  calculateHeight(root);

  return ans;
};
