var addTwoNumbers = function (l1, l2) {
  // Create a dummy node to start the result linked list
  let ans = new ListNode();
  // Keep a reference to the head of the result list
  let ansHead = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    // Get the current values from l1 and l2, or 0 if any is null
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
   // Update carry for the next iteration
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    // Create a new node with the digit and append to the result
    let newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    // Move to the next nodes in l1 and l2 if they exist
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return ansHead.next;
};

// Time: O(n), Space: O(1)
