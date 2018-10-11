class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        return this.bubbleUp();
    }

    extractMax() {
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
        let child = length - 1;
        let parent = Math.floor((child - 1) / 2);
        while(this.values[child] > this.values[parent]) {
            let parentIdx = parent;
            let temp = this.values[parent];
            this.values[parent] = this.values[child];
            this.values[child] = temp;
            child = parentIdx;
            parent = Math.floor((child - 1) / 2);
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
        while(this.values[parent] < this.values[child1] && this.values[parent] < this.values[child2]) {
            let temp = this.values[parent];
            if(this.values[child1] > this.values[child2]) {
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
        }
    }
}

let heap = new MaxBinaryHeap();
console.log(heap.insert(92));
console.log(heap.insert(62));
console.log(heap.insert(70));
console.log(heap.insert(58));
console.log(heap.insert(56));
console.log(heap.extractMax());
console.log(heap.values);

