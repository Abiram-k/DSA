class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // to initialize a node
    }
}

class AddNode {

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
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deleteNode(value) {
        if (!this.head)
            return;
        if (this.head.value == value) {
            this.head = this.head.next;

            if (!this.head)
                this.tail = null;

            return;
        };
        let current = this.head;
        let prev = null;
        while (current && current.value != value) {
            prev = current;
            current = current.next;
        }

        if (!current) {
            console.log("No item were founded");
            return;
        }
        if (current == this.tail) {
            this.tail = prev;
            this.tail.next = null
        }
        else {
            prev.next = current.next;
        }

    }
    insertNode(nextTo, value) {
        const newNode = new Node(value);
        let current = this.head;
        while (current && current.value !== nextTo) {
            current = current.next;
        }
        if (!current) {
            console.log("No nextTo value were founded !");
            console.log(newNode);
            return;
        }

        newNode.next = current.next;
        current.next = newNode;

        if (current == this.tail) {
            this.tail = newNode;
        }
    }

    highest() {
        let current = this.head;
        if (!current) {
            console.log("List is empty");
            return null;
        }
        let highest = current.value
        while (current) {

            if (current.value > highest)
                highest = current.value

            current = current.next;
        }
        console.log("Highest: ", highest)
    }

    // 10 -> 20 -> 55 -> 30 -> null

    sortLinkedList() {
        let current = this.head;

        while (current) {
            let after = current.next;

            while (after) {
                if (after.value < current.value) {
                    let temp = current.value;
                    current.value = after.value;
                    after.value = temp;
                }
                after = after.next;
            }

            current = current.next;
        }
    }

    display() {

        if (this.head == null)
            console.log("No values in linked list");

        let current = this.head;
        let result = "";
        while (current != null) {
            result += current.value + " -> ";
            current = current.next;
        }
        result += "null"
        console.log(result)
    }
    delteMiddleNode() {
        if (!this.head) {
            console.log("No nodes are there !")
            return
        }
        let prev = null;
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            fast = fast.next.next
            prev = slow;
            slow = slow.next
        }
        prev.next = slow.next;
    }
    removeOdd() {
        while (this.head && this.head.value % 2 != 0) {
            this.head = this.head.next;
        }
        let current = this.head;
        let prev = null;
        while (current) {
            if (current.value % 2 != 0) {
                prev.next = current.next;
            } else {
                prev = current;
            }
            current = current.next;
        }
    }

}

const node = new AddNode();

node.addNewNode(10);
node.addNewNode(20);
// node.insertNode(20, 55);
node.addNewNode(30);
node.addNewNode(5);
node.addNewNode(3);
node.removeOdd();
// node.deleteNode(30);
// node.sortLinkedList();
// node.highest()
// node.delteMiddleNode();
node.display();

