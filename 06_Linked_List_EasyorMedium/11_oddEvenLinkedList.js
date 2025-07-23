var oddEvenList = function(head) {
    // If the list is empty or has only one node, return it as is
    if(!head || !head.next) return head;

    // Initialize odd and even pointers
    let odd = head;
    let even = head.next;

    // Save the starting point of the even list to connect later
    let evenStartCopy = head.next;

    // Rearranging the nodes so that all odd nodes come first, followed by even nodes
    while(odd.next && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }

    // Connect the end of odd list to the start of even list
    odd.next = evenStartCopy;

    return head;
};

// Time: O(n), Space: O(1)