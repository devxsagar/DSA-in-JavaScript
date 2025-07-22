var deleteDuplicates = function (head) {
  // Start with the current pointer at the head of the linked list
  let curr = head;

  // Traverse the list until we reach the end
  while (curr && curr.next) {
    // If the current node's value is equal to the next node's value (duplicate)
    if (curr.val === curr.next.val) {
      // Skip the duplicate node by updating the next pointer
      curr.next = curr.next.next;
    } else {
      // Otherwise, move the current pointer forward
      curr = curr.next;
    }
  }

  // Return the modified list with duplicates removed
  return head;
};

// Time: O(n), Space: O(1);