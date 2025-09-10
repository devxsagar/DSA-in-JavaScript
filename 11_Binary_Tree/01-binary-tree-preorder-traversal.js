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

// Recursive Approach
var preorderTraversal = function (root) {
  // Array to store the result of preorder traversal
  const ans = [];

  // Helper recursive function to traverse the tree
  function traversal(curr) {
    if (!curr) return; // Base case: if node is null, stop recursion
    ans.push(curr.val); // Visit current node -> store value in ans[]

    traversal(curr.left); // Recursively traverse the left subtree
    traversal(curr.right); // Recursively traverse the right subtree
  }

  traversal(root); // Start traversal from the root node

  return ans;
};

/** Dry Run:
 
          1
        /   \
       2     3
      / \     \
     4   5     8
        / \
       6   7
            \
             9



    1. Start at 1 → ans = [1]
    2. Go left to 2 → ans = [1, 2]
    3. Go left to 4 → ans = [1, 2, 4]
    
        - 4 has no children

    4. Back to 2, go right to 5 → ans = [1, 2, 4, 5]
    5. At 5, go left → 6 → ans = [1, 2, 4, 5, 6]

        - 6 has no children

    6. At 5, go right → 7 → ans = [1, 2, 4, 5, 6, 7]

    7. At 7, go right → 9 → ans = [1, 2, 4, 5, 6, 7, 9]

        - 9 has no children

    8. Done with left subtree of 1. Now go right to 3 → ans = [1, 2, 4, 5, 6, 7, 9, 3]

    9. At 3, go left → null, skip

    10. At 3, go right → 8 → ans = [1, 2, 4, 5, 6, 7, 9, 3, 8]

        - 8 has no children

        [1, 2, 4, 5, 6, 7, 9, 3, 8]
 */

// Iterative Approach
var preorderTraversal = function (root) {
  // If the tree is empty, return an empty array
  if (!root) return [];

  const ans = []; // This will store the preorder traversal result
  const stack = [root]; // Use a stack to keep track of nodes (start with root)

  while (stack.length) {
    let curr = stack.pop(); // Take out the top node from stack
    ans.push(curr.val); // Visit the node

    // Push right child first (so that left child is processed first)
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }

  return ans;
};
