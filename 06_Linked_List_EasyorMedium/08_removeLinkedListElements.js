var removeElements = function(head, val) {
    let sentinelNode = new ListNode; // create a sentinel node
    sentinelNode.next = head; // link the sentinel node to the head

    let prev = sentinelNode; // create a prev 
    while(prev && prev.next) {
        if(prev.next.val === val) {
            prev.next = prev.next.next; 
        } else {
            prev = prev.next
        }
    }

    return sentinelNode.next; // sentinelNode.next means head of the updated list
};


// Time: O(n), Space: O(1)