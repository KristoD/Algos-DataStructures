class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

// Binary Heap Priority Queue

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority)
        this.values.push(node);
        this.bubbleUp();
    }

    dequeue() {
        if(this.values.length < 1) return undefined;
        const min = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.bubbleDown();
        return min;
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
            if(child1 >= this.values.length || child2 >= this.values.length) break;
        }
    }
}

// Weighted Graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({vertex: vertex2, weight: weight});
        this.adjacencyList[vertex2].push({vertex: vertex1, weight: weight});
    }
    
    // Dijkstra's Algorithm

    shortestPath(start, end) {
        if(!this.adjacencyList[start] || !this.adjacencyList[end]) return undefined;

        let pq = new PriorityQueue();
        const distances = {};
        const previous = {};
        let result = [];
        let dqVertex;

        // build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(pq.values.length) {
            dqVertex = pq.dequeue();
            if(dqVertex.value === end) {
                while(previous[dqVertex.value]) {
                    result.push(dqVertex.value);
                    dqVertex.value = previous[dqVertex.value];
                }
                result.push(start)
                break;
            }
            this.adjacencyList[dqVertex.value].forEach(neighbor => {
                if(dqVertex.priority + neighbor.weight < distances[neighbor.vertex]) {
                    distances[neighbor.vertex] = dqVertex.priority + neighbor.weight;
                    previous[neighbor.vertex] = dqVertex.value;
                    pq.enqueue(neighbor.vertex, distances[neighbor.vertex]);
                }
            });
        }
        return result.reverse();
    }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "F", 1);
graph.addEdge("D", "E", 3);
graph.addEdge("F", "E", 1);
console.log(graph.adjacencyList);
console.log(graph.shortestPath("A", "E"));