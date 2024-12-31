class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(key, value) {
        const newNode = new Node(key, value)

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current) {
            if (current.key == key) {
                current.value = value;
                return;
            }
            current = current.next;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    search(key) {
        if (!this.head) {
            console.log("Key not founded!")
            return
        }
        let current = this.head;
        while (current) {
            if (current.key == key)
                return current.value
            current = current.next;
        }

        throw new Error("Key not found!")
    }
    delete(key) {
        if (!this.head) {
            console.log("No such key were founded!");
            return;
        }
        if (this.head.key == key) {
            this.head = this.head.next
            return;
        }

        let current = this.head;
        let prev = null;
        while (current && current.key != key) {
            prev = current;
            current = current.next;
        }
        if (current) {
            prev.next = current.next
            return;
        }
        throw new Error("key not founded")
    }
}
class ChainingCollisionHandle {
    constructor(size) {
        this.table = new Array(size).fill(null).map(() => new LinkedList());
        this.size = size;
    }
    hash(key) {
        const PRIME_NUMBER = 31;
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            let charCode = key.charCodeAt(i);
            index = (index * PRIME_NUMBER + charCode) % this.size ;
        }
        return index;
    }
    insert(key, value) {
        const index = this.hash(key);
        const list = this.table[index];
        return list.insert(key, value);
    }
    delete(key) {
        const index = this.hash(key);
        const list = this.table[index];
        return list.delete(key);
    }
    search(key) {
        const index = this.hash(key);
        const list = this.table[index];
        return list.search(key);
    }
    display() {
        return this.table.map((list, index) => {
            let items = [];
            let current = list.head;
            while (current) {
                items.push({ key: current.key, value: current.value });
                current = current.next;
            }
            return { index, items };
        });
    }
}
const instance = new ChainingCollisionHandle(3)
instance.insert("name", "abiram");
instance.insert("name", "abhishek");
instance.insert("age", 20);
instance.delete("age")
console.log(instance.search("name"));
console.log(instance.display());