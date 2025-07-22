var removeNthFromEnd = function(head, n) {
    // Create a sentinel (dummy) node to handle edge cases like removing the head
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    // Calculate the total length of the linked list
    let length = 0;
    while(head) {
        head = head.next;
        length++;
    }

    // Find the position just before the node we want to remove
    let prevPos = length-n;

    // Traverse the list to reach the previous node
    let prev = sentinelNode;

    for(let i=0; i < prevPos; i++) {
        prev = prev.next;
    }

    // Remove the nth node from the end by skipping it
    prev.next = prev.next.next;

    return sentinelNode.next;
};

// Time: O(n), Space: O(1)


// Approach 2 : One Pass Algo
var removeNthFromEnd = function(head, n) {
    // Create a sentinel (dummy) node to handle edge cases like removing the head
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    // Initialize two pointers: second (sp) and first (fp) starting from the sentinel node
    let sp = sentinelNode;
    let fp = sentinelNode;

    // Move the fast pointer `n` steps ahead
    for(let i=0; i<n; i++) {
        fp = fp.next;
    }

    // Move both pointers until first pointer reaches the last node
    // At this point, second pointer will be just before the node to remove
    while(fp.next) {
        fp = fp.next;
        sp = sp.next;
    }

    // Remove the target node
    sp.next = sp.next.next;

    return sentinelNode.next;
    
};

// Time: O(n), Space: O(1)
