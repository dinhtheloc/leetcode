

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        this.length++;
        const node = new Node(value);

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }
        console.log(`insert ${node.value}`);

        return node;
    }

    insertHead(value) {
        this.length++;
        const node = new Node(value);
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = this.tail = node;
        }

        console.log(`insertHead ${node.value}`);

        return node;
    }
    removeHead() {
        if (this.head) {
            this.length--;
            const node = this.head;
            this.head = this.head.next;
            console.log(`removeHead ${node.value}`);
            return node;
        }

        return undefined;
    }
    removeLast() {
        if (this.tail) {
            this.length--;
            const node = this.tail;

            let currentNode = this.head;

            while (currentNode.next !== node) {
                currentNode = currentNode.next;
            }
            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;
            console.log(`removeLast ${node.value}`);

            return node;
        }
        return undefined;
    }

    insertIndex(value, index) {
        if (index < 0 || index > this.length) {
            throw new Error("Insert index out of bounds");
        }

        if (index === 0) {
            return this.insertHead(value);
        }

        if (index === this.length) {
            this.insert(value);
        }

        this.length++;
        let i = 1;
        let currentNode = this.head;
        let preNode = null;

        const node = new Node(value);

        while (i !== index) {
            i++;
            preNode = currentNode;
            currentNode = currentNode.next;
        }
        preNode.next = node;
        node.next = currentNode;
        console.log(`insertIndex ${node.value} - ${index}`);
        return node;
    }

    removeIndex(index) {
        if (index < 0 || index > this.length) {
            throw new Error("Remove index out of bounds");
        }

        this.length--;
        let i = 1;
        let currentNode = this.head;
        let preNode = null;


        while (i !== index) {
            i++;
            preNode = currentNode;
            currentNode = currentNode.next;
        }
        const node = new Node(currentNode.value);

        preNode.next = currentNode.next;
        currentNode = null;
        console.log(`removeIndex ${node.value} - ${index}`);
        return node;
    }


    print() {
        let current = this.head;
        console.log(`------------------`);
        while (current) {
            console.log(`Node -----> ${current.value}`);

            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.insert(1);
linkedList.print();
linkedList.insertHead(2);
linkedList.print();
linkedList.insert(3);
linkedList.print();
linkedList.insertHead(4);
linkedList.print();
linkedList.insert(5);
linkedList.print();
linkedList.removeHead();
linkedList.print();
linkedList.removeLast();
linkedList.print();
linkedList.insertIndex(5, 2);
linkedList.print();
linkedList.removeIndex(3);
linkedList.print();

