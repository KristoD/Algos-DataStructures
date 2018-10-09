class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if(!this.root) {
            this.root = node;
            return this;
        }
        let branch = this.root;
        while(true) {
            if(value === branch.value) return undefined;
            if(value < branch.value) {
                if(!branch.left) {
                    branch.left = node;
                    return this;
                } 
                branch = branch.left;
            } else {
                if(!branch.right) {
                    branch.right = node;
                    return this;
                }
                branch = branch.right;
            }
        }
    }

    find(value) {
        if(!this.root) return undefined;
        let branch = this.root;
        while(true) {
            if(!branch) return undefined;
            if(branch.value === value) return branch;
            if(value < branch.value) branch = branch.left;
            else branch = branch.right;
        }
    }

    // Refactor this method later to use Queue with Linked List instead of array

    BFS() {
        var data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(12);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.BFS());