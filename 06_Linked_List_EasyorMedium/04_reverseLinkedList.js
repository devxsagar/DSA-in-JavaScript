function reverseLinkedList(head) {
    let curr = head;
    let prev = null
    
    while(curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // head = prev
    // return head

    return prev;
}