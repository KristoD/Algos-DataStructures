var queue = [];

// Terrible method

queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");
queue.shift();
queue.shift();
queue.shift();

// This method is better as shift() re-indexes the entire array. This is constant time.

queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");
queue.pop();
queue.pop();
queue.pop();

// They're both terrible methods anyway. Use Linked Lists.