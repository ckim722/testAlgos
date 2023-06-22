function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  //using current length as key, instantiate key value pair in contents object
  //be sure to increment length

  this.contents[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  //using current length as key, declare holder variable to return topmost value
  //nullify topmost key
  //be sure to decrement length
  //return holder variable (popped)

  const popped = this.contents[this.length - 1];
  delete this.contents[this.length - 1];
  this.length -= 1; 
  return popped;
};

Stack.prototype.forEach = function(callback) {
  
  //use while loop, for while this.length is >=0
  //invoke callback with invocations of pop method through stack

  while (this.length > 0){
    callback(this.pop());
  }
};

function Queue() { //FIRST IN FIRST OUT
  this.stack1 = new Stack; //FIRST
  this.stack2 = new Stack; //LAST
}

Queue.prototype.enqueue = function(value) {
  //needs to add at end of last stack's length the passed in value
  this.stack1.push(value);
  // this.stack1.length++;
};

Queue.prototype.dequeue = function() {
  //should return the 0th of stack 1, using stack 2 as holder

  //until stack 1's length is < 0
  //push every popped value of stack 1 into stack 2
  //decrement stack 1's length
  //increment stack 2
  //declare holder variable, assign to to popped value of stack2
  //until stack 2's length is 0
  //push every poppedvalue of stack 2 into 1
  //decrement stack 2 lengtht
  //increment stakc 1 length
  //return holder variable

  while (this.stack1.length > 0){
    this.stack2.push(this.stack1.pop());
    // this.stack1.length--;
    // this.stack2.length++;
  }
  const returned = this.stack2.pop();
  // this.stack2.length--;

  while (this.stack2.length > 0){
    this.stack1.push(this.stack2.pop());
    // this.stack2.length--;
    // this.stack1.length++;
  }

  return returned;

};

// const testStack = new Stack;
// testStack.push(0);
// testStack.push(1);
// console.log(testStack);
// console.log(testStack.pop());
// // testStack.pop();
// console.log(testStack);


const test = new Queue;
test.enqueue(0);
// console.log(test);
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
console.log(test.dequeue());
test.enqueue('a');
test.enqueue('b');
console.log(test);


module.exports = { Stack, Queue };
