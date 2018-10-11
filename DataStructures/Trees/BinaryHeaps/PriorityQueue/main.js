class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority)
        this.values.push(node);
        return this.bubbleUp();
    }

    dequeue() {
        if(this.values.length < 1) return undefined;
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.bubbleDown();
        return max;
    }

    bubbleUp() {
        let length = this.values.length;
        if(length === 1) return this.values;
        let child = (length - 1);
        let parent = Math.floor((child - 1) / 2);
        while(this.values[child].priority < this.values[parent].priority) {
            let parentIdx = parent;
            let temp = this.values[parent];
            this.values[parent] = this.values[child];
            this.values[child] = temp;
            child = parentIdx;
            parent = Math.floor((child - 1) / 2);
            if(child < 0 || parent < 0) break;
        }
        return this.values;
    }

    bubbleDown() {
        let parent = 0;
        let child1 = 0;
        let child2 = 0;
        if(this.values.length >= 2) {
            child1 = (2 * parent) + 1;
        }
        if(this.values.length >= 3) {
            child2 = (2 * parent) + 2;
        }
        while(this.values[parent].priority >= this.values[child1].priority && this.values[parent].priority >= this.values[child2].priority) {
            let temp = this.values[parent];
            if(this.values[child1].priority < this.values[child2].priority) {
                this.values[parent] = this.values[child1];
                parent = child1;
                this.values[child1] = temp;
            } else {
                this.values[parent] = this.values[child2];
                parent = child2;
                this.values[child2] = temp;
            }
            child1 = (parent * 2) + 1;
            child2 = (parent * 2) + 2;
            if(child1 > this.values.length || child2 > this.values.length) break;
        }
    }
}

let priorityQ = new PriorityQueue();
console.log(priorityQ.enqueue("walk dog", 2));
console.log(priorityQ.enqueue("walk cat", 5));
console.log(priorityQ.enqueue("code", 3));
console.log(priorityQ.enqueue("play games", 1));
console.log(priorityQ.enqueue("watch show", 3));
console.log(priorityQ.dequeue());
console.log(priorityQ.values);

