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

var isValidBST = function (root) {
  const isBST = (curr, lo, hi) => {
    if (!curr) return true;

    // current value is less than equal to lower value or greater than equal to higher value
    // then return false
    if ((lo !== null && curr.val <= lo) || (hi !== null && curr.val >= hi)) {
      return false;
    }

    //for left subtree lower = lower and higher = curr.val
    // for right subtree lower = curr.val and higher = higher
    const isLeftBST = isBST(curr.left, lo, curr.val);
    const isRightBST = isBST(curr.right, curr.val, hi);

    return isLeftBST && isRightBST;
  };

  // we get true or false and we will return that
  return isBST(root, null, null);
};
