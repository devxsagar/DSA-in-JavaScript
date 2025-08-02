
// ---------- STACK (LIFO: Last In, First Out) ----------

let stack = [];

// Push elements to the top of the stack
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack); // [ 10, 20, 30 ]

// Pop removes the top element (last inserted)
stack.pop();
console.log(stack); // [ 10, 20 ]

// Peek / Top - View the top element without removing it
let top = stack[stack.length - 1];
console.log(top); // 20 

stack[2]; // Invalid stack operation



// ---------- QUEUE (FIFO: First In, First Out) ----------

let queue = [];

// Enqueue - Add elements to the rear of the queue
queue.push(20);
queue.push(22);
queue.push(24);
queue.push(26);
console.log(queue); // [ 20, 22, 24, 26 ]

// Dequeue - Remove the element from the front of the queue
queue.shift();
console.log(queue); // [ 22, 24, 26 ]

// Peek / Front - View the front element without removing it
let front = queue[0];
console.log(front); // 22 
