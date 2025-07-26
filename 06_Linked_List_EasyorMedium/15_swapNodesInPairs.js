
// Approach 1 - Iterative
var swapPairs = function(head) {
    // Base case: if the list is empty or has only one node, return it as-is
    if (!head || !head.next) return head;

    // Create a dummy node to simplify edge cases at the head
    let dummy = new ListNode();
    dummy.next = head;

    // Initialize pointers
    let prevNode = dummy;
    let currNode = head;
    let nextNode = head.next;

    // Traverse the list while there are at least two nodes to swap
    while (currNode && nextNode) {
        // Perform the swap:
        // prevNode -> nextNode
        prevNode.next = nextNode;

        // currNode -> node after nextNode
        currNode.next = nextNode.next;

        // nextNode -> currNode (completing the swap)
        nextNode.next = currNode;

        // Move pointers forward to the next pair
        prevNode = currNode;
        currNode = prevNode.next;
        nextNode = currNode && currNode.next; // Check if next pair exists
    }

    // Return the new head of the list
    return dummy.next;
};

// Time: O(n), Space: O(1)  

// Approach 1 - Recursive
var swapPairs = function(head) {
   if(!head || !head.next) return head;

   let left = head;
   let right = head.next

   left.next = swapPairs(right.next);
   right.next = left;
   return right;
};