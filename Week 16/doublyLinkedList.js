class Node {
    constructor(data) {
        this.value = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addNewNode(value) {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    dispay() {
        let current = this.head;
        let result = ''
        while (current) {
            result += `${current.value} => `
            current = current.next
        }
        console.log(result + 'null');
    }
    dispayReverse() {
        let current = this.tail;
        let result = ''
        while (current) {
            result += ` <= ${current.value}`
            current = current.prev
        }
        console.log('null' + result);
    }
    removeDuplicatesOnright() {
        if (this.head.next == null) {
            return this.head;
        }
        let current = this.head;
        while (current) {
            let next = current.next;

            while (next && current.value == next.value) {
                next = next.next;
            }

            current.next = next;

            current = current.next;
        }
    }
    removeDuplicate() {
        if (this.head.next == null) {
            return this.head;
        }
        let current = this.head;
        while (current) {
            let next = current.next;
            while (next) {
                if (current.value == next.value) {
                    let prev = next.prev;
                    const nextNode = next.next;
                    prev.next = nextNode;
                    if (nextNode) {
                        nextNode.prev = prev;
                    }
                    if (next === this.tail) {
                        this.tail = prev;
                    }
                }
                next = next.next;
            }
            current = current.next;
        }
    }
}

const instance = new DoublyLinkedList();
instance.addNewNode(19);
instance.addNewNode(19);
instance.addNewNode(29);
instance.addNewNode(29);
instance.addNewNode(29);
instance.addNewNode(39);
instance.addNewNode(39);
instance.addNewNode(39);
// instance.removeDuplicatesOnright();
instance.removeDuplicate()
instance.dispay();
// instance.dispayReverse();