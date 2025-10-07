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


var maxPathSum = function(root) {
    let maxPathSum = -Infinity;

    const traversal = (curr) => {
        if(!curr) return 0;

        let maxLeft = Math.max(0, traversal(curr.left));
        let maxRight = Math.max(0, traversal(curr.right));

        let currMax = curr.val + maxLeft + maxRight;
        maxPathSum = Math.max(currMax, maxPathSum);

        return curr.val + Math.max(maxLeft, maxRight);
    }

    traversal(root);
    return maxPathSum;
};