var rotateRight = function(head, k) {
    // Edge cases: empty list, single node, or no rotation needed
    if (!head || !head.next || k === 0) return head;

    // Step 1: Find the length of the linked list
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }

    // Step 2: Normalize k to prevent unnecessary full rotations
    k = k % length;
    if (k === 0) return head; // No rotation needed

    // Step 3: Use two pointers to find the rotation point
    let sp = head; // Slow pointer: will stop just before the new head
    let fp = head; // Fast pointer: will be k steps ahead

    // Move fast pointer k steps ahead
    for (let i = 0; i < k; i++) {
        fp = fp.next;
    }

    // Move both pointers until fast reaches the last node
    while (fp.next) {
        sp = sp.next;
        fp = fp.next;
    }

    // Step 4: Perform the rotation
    let newHead = sp.next; // New head is after the slow pointer
    fp.next = head;        // Connect the end of list to the original head
    sp.next = null;        // Break the list at the rotation point

    return newHead; // Return the new head of the rotated list
};