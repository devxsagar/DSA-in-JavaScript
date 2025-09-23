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
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const ans = [];
  let level = 0;

  while (queue.length) {
    const levelArr = [];
    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      let curr = queue.shift();

      if (level % 2 === 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }

      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }

    ans.push(levelArr);

    // another way to do
    // if(level % 2 === 0) {
    //     ans.push(levelArr);
    // } else {
    //     ans.push(levelArr.reverse());
    // }

    level++;
  }

  return ans;
};

// Recursive Approach
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const ans = [];

  const traverse = (curr, level) => {
    if (!ans[level]) ans[level] = [];

    if (level % 2 === 0) {
      ans[level].push(curr.val);
    } else {
      ans[level].unshift(curr.val);
    }

    curr.left && traverse(curr.left, level + 1);
    curr.right && traverse(curr.right, level + 1);
  };

  traverse(root, 0);

  return ans;
};
