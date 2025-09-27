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


var rightSideView = function (root) {
    if (!root) return [];
    const ans = [];
    const queue = [root]

    while (queue.length) {
        let levelLength = queue.length;

        for (let i = 0; i < levelLength; i++) {
            // get the node from the queue
            let curr = queue.shift();

            // first node of this level (right most)
            i == 0 && ans.push(curr.val);

            // right first so right is seen first
            curr.right && queue.push(curr.right);
            curr.left && queue.push(curr.left);
        }
    }

    return ans;
};