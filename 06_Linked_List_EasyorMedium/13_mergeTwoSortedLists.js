

// Approach: With Dummy Node
var mergeTwoLists = function(l1, l2) {
    // Create a dummy node
    let merge = new ListNode();
    // Keep a reference to the dummy node to return the head later
    let mergeCopy = merge;

    // Traverse both lists while both have nodes
    while (l1 && l2) {
        // Compare values of current nodes and attach the smaller one
        if(l1.val < l2.val) {
            merge.next = l1;   // Point to l1 node
            l1 = l1.next;      // Move l1 to the next node
        } else {
            merge.next = l2;   // Point to l2 node
            l2 = l2.next;      // Move l2 to the next node
        }
         merge = merge.next;   // Move the merge pointer forward
    }

    // If there are remaining nodes in l1 or l2, attach them directly
    if(l1) {
        merge.next = l1;
    }
    if(l2) {
        merge.next = l2
    }

    return mergeCopy.next;
};