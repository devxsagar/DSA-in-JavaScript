// Approach 1
var isPalindrome = function(head) {
    const arr = [];
    let curr = head;

    // Convert the linked list into an array
    while (curr !== null) {
        arr.push(curr.val);  // Store each node's value
        curr = curr.next;
    }

    // Assume the list is a palindrome
    let ans = true;
    let n = Math.floor(arr.length / 2); // Only need to check up to the middle

    // Compare values from both ends toward the center
    for (let i = 0; i < n; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            ans = false; // Mismatch found, not a palindrome
            break;       // Exit early for efficiency
        }
    }

    return ans;
};
// Time: O(n), Space: O(n)

// Approach 2 (Optimized)
