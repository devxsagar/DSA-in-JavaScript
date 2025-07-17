// Node Representation
function Node(val) {
  this.val = val;
  this.next = null;
}

// Linked List Representation
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

let list = new MyLinkedList();

const node1 = new Node(20);

const node2 = new Node(30);

const node3 = new Node(40);

node1.next = node2;
node2.next = node3;

list.head = node1;
list.size = 3;

let curr = list.head;

while (curr !== null) {
  console.log(curr.val);
  curr = curr.next;
}

// for (let i = 0; i < list.size; i++) {
//   console.log(curr.val);
//   curr = curr.next;
// }
