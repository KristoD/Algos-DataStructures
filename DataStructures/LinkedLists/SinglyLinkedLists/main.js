class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let runner = this.head;
        let newTail = runner;
        while(runner.next) {
            newTail = runner;
            runner = runner.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) this.head = null, this.tail = null;
        return runner;
    }

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        if(this.head.next) {
            this.head = temp.next;
        } else {
            this.head = null;
            this.tail = null;
        }    
        this.length--;
        return temp;
    }

    unshift(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let runner = this.head;
        let counter = 0;
        while(runner.next) {
            runner = runner.next;
            counter++;
        }
        return runner;
    }

    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }
        return false;
    }
}

var list = new SinglyLinkedList();
list.push("HI");
list.push("YOU");
list.push("PEASANT");
console.log(list)
console.log(list.get(2));