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
 * @return {TreeNode}
 */

// Recursive approach
var invertTree = function (root) {
   if(!root) return root;

   let temp = root.left;
   root.left = root.right;
   root.right = temp;

   invertTree(root.left);
   invertTree(root.right);

   return root;
};


// Iterative -> solved by me
var invertTree = function (root) {
    if (!root) return root;

    const queue = [root];

    while (queue.length) {
        curr = queue.shift();

        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        curr.right && queue.push(curr.right);
        curr.left && queue.push(curr.left);
    }

    return root;
};