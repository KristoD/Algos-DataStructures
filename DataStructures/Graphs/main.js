// Undirected graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        else return "Vertex already exists";
    }

    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            while(this.adjacencyList[vertex].length) {
                const poppedEdge = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, poppedEdge);
            }
            delete this.adjacencyList[vertex];
        } else {
            return "Vertex does not exist";
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            // If I wanted to make this into a "directed" graph, just remove line below.
            this.adjacencyList[vertex2].push(vertex1);
        } else {
            return "One or both vertices don't exist.";
        }
    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        } else {
            return "One or both vertices don't exist.";
        }
    }

    DFSRecursive(start) {
        if(!this.adjacencyList[start]) return undefined;
        const result = [];
        const visited = {};
        const DFS = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return DFS(neighbor);
                }
            });
        }
        DFS(start);
        return result;
    }

    DFSIterative(start) {
        if(!this.adjacencyList[start]) return undefined;
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let vertex;
        while(stack.length) {
            vertex = stack.pop();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });   
        }
        return result;
    }

    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let vertex;
        while(queue.length) {
            vertex = queue.shift();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// console.log(g.adjacencyList);
console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));
