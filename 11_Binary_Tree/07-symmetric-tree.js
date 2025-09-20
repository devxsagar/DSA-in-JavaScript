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

// Bottom-up approach (Recursive)
var isSymmetric = function (root) {
  const isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  };

  return isMirror(root.left, root.right);
};

// Iterative approach
var isSymmetric = function (root) {
  const queue = [root.left, root.right];

  while (queue.length) {
    let p1 = queue.shift();
    let p2 = queue.shift();

    if (p1 === null && p2 === null) {
      continue;
    }

    if (p1 === null || p2 === null) {
      return false;
    }

    if (p1.val !== p2.val) {
      return false;
    }

    queue.push(p1.left, p2.right);
    queue.push(p1.right, p2.left);
  }

  return true;
};
