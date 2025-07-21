// Brute Force Approach
var getIntersectionNode = function (headA, headB) {
  while (headA) {
    let a = headB; // start from headB every time

    while (a) {
      // found intersection
      if (headA === a) {
        return headA;
      }
      a = a.next;
    }
    headA = headA.next;
  }

  return null; // no intersection
};

// Time: O(m*n) -> O(n^2) , Space: O(1)

// Optimized Approach
var getIntersectionNode = function(headA, headB) {
   let set = new Set(); // to store nodes of list B

   // Add all nodes from list B to the set
   while(headB) {
    set.add(headB);
    headB = headB.next;
   }

   // Traverse list A and check if any node is in the set
   while(headA) {
    if(set.has(headA)){
        return headA; // found intersection
    }
    headA = headA.next;
   }

   return null; // no intersection
};

// Time: O(m+n) n and m are lengths of headA and headB
// Space: O(m) storing nodes of listB in a set 