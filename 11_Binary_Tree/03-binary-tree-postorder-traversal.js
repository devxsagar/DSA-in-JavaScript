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
