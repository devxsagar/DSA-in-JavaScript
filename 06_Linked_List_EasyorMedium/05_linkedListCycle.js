
// First Approach - Hash Table/ Hash Map (Set)

var hasCycle = function(head) {
    let curr = head;
    let seenNodes = new Set();

    while(curr != null) {
        if(seenNodes.has(curr)) {
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
};

// Time: O(n), Space: O(n)



// Second Approach - Floyd's Algorithm (Better)
var hasCycle = function(head) {
    if(head === null) return false;

    let fast = head.next;
    let slow = head;

    while(fast !== slow) {
        if(fast === null || fast.next === null) {
            return false; // no cycle
        }
        fast = fast.next.next;
        slow = slow.next
    }
    return true; // pointers met => cycle
};