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

var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const findDepth = (curr) => {
    if (!curr) return 0; // base case: depth of empty tree is 0

    // recursively get left and right subtree depths
    let leftSubTreeDepth = findDepth(curr.left);
    let rightSubTreeDepth = findDepth(curr.right);

    // diameter at current node = longest path through it
    let currDiameter = leftSubTreeDepth + rightSubTreeDepth;

    // update global max diameter
    diameter = Math.max(diameter, currDiameter);

    // return depth of current node
    return 1 + Math.max(leftSubTreeDepth, rightSubTreeDepth);
  };

  findDepth(root);

  return diameter;
};
