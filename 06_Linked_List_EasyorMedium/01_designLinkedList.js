// Node Representation
function Node(val) {
  this.val = val;
  this.next = null;
}

// Linked List Representation
var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
}

// Adding Node to Linked List

// At the end
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val); // Create a node
  newNode.next = this.head; // New node points to the head
  this.head = newNode; // Head points to the new node
  this.size++; // Added a node so increase the size by 1
}

// At the tail
MyLinkedList.prototype.addToTail = function(val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }
M
  this.size++;
}

// At the index
MyLinkedList.prototype.addArIndex = function(index, val) {


  if (index === 0) {
    this.addAtHead(val);
  } else if (index === this.size) {
    this.addToTail(val);
  } else {
    let newNode = new Node(val);

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    this.size++
  }
}

// Get value at a specific index
MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this.size) return -1; // Corner case

  let curr = this.head;

  for(let i = 0; i<index; i++) {
    curr = curr.next;
  }

  return curr.val;
}