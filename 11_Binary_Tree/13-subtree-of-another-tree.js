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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */


var isSubtree = function (root, subRoot) {
  hashRoot = serialize(root);
  hashSubRoot = serialize(subRoot);

  return hashRoot.includes(hashSubRoot);
};

function serialize(root) {
  let hash = "";

  const traversal = (curr) => {
    if (!curr) {
      hash += "-#";
      return;
    }
    hash = hash + "-" + curr.val;
    traversal(curr.left);
    traversal(curr.right);
  };

  traversal(root);
  return hash;
}


/**
 *  Time Complexity: O(n + m)
 *  Space Complexity: O(n + m + h)
 *    - O(n + m) (because you store both strings).
 *    - Recursion stack: O(h) where h = height of tree.
 */