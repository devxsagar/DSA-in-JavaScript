function middleOfLinkedList(head) {
    const arr = [];

    let curr = head;

    while(curr != null) {
        arr.push(curr);
        curr = curr.next;
    }

    return arr[Math.floor(arr.length / 2)];
}

// Time: O(n), Space: O(n)



function middleOfLinkedListOptimized(head) {
    let slow = head;
    let first = head;

    while(first !== null && first.next !== null) {
        slow = slow.next;
        first = first.next.next;
    }

    return slow;
}

// Time: O(n), Space: O(1)