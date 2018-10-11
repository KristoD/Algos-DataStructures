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

    DFSInOrder() {
        if(!this.root) return undefined;
        // node that is going to initially be sent as an argument to our recursive helper function
        let branch = this.root;
        // array that is going to have each node's value in the tree pushed to it and eventually returned
        let data = [];
        function traverse(node) {
            /*
                recursive helper function that traverses the whole left side of the tree,
                pushes the node value to our data array,
                then continues to traverse the right side of the tree.
            */
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        // initial invocation to recursive function
        traverse(branch);
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
console.log(tree.DFSInOrder());