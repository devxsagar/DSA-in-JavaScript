
var MyStack = function() {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q.length;

    for(let i=0; i<n-1; i++) {
       this.q.push(this.q.shift())
    }

    let lastEl = this.q.shift();

    return lastEl;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q.length;

    for(let i=0; i<n-1; i++) {
        this.q.push(this.q.shift())
    }

    let topEl = this.q[0];
    this.q.push(this.q.shift());

    return topEl;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length === 0 ? true : false;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */