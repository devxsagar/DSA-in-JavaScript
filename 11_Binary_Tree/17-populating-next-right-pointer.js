/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if(!root) return root;

    const traversal = (curr) => {
        if(curr.left) {
            curr.left.next = curr.right;
        }

        if(curr.right && curr.next) {
            curr.right.next = curr.next.left;
        }

        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    }

    traversal(root);
    return root;
}

/**
 *  Approach:
 *      - If tree is empty, just return the root.
 *      - Define a recursive helper function that works on the current node and call it with root node.
 *      - For each node:
 *           - Connect the left child's next to the right child (within same parent).
 *           - If the current node has a next, then connect right child to the next node's left child.
 *      - Recursively traverse the left and right subtree.
        - At the end return the root.
 */