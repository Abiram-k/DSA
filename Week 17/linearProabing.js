class LinearProbingHashTable {
    constructor(size) {
        if (!size)
            console.log("Specify the size of the Hash table!")
        this.table = new Array(size).fill(null);
        this.size = size;
        this.deleted = "<deleted>"
    }
    hash(key) {
        let PRIME_VALUE = 31;
        let index = 0;
        if (typeof key !== "string") {
            throw new Error("Key must be a string");
        }

        for (let i = 0; i < key.length; i++) {
            let char = key.charCodeAt(i)
            index = ((index * PRIME_VALUE + char) % this.size); // to avoid maximum collision
        }
        return index;
    }
    insert(key, value) {
        let index = this.hash(key);
        console.log(index)
        for (let i = 0; i < this.size; i++) {
            if (this.table[index] === null) {
                this.table[index] = { key, value }
                return true;
            } else if (this.table[index].key == key) {
                this.table[index].value = value;
                return true;
            }
            index = (index + 1) % this.size;
        }
        throw new Error("Hash table is full");
    }
    delete(key) {
        let index = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            if (this.table[index].key == key) {
                this.table[index] = null;
                return true;
            }
            index = (index + 1) % this.size
        }
        return "Key not founded!"
    }
    search(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.size; i++) {
            if (this.table[index].key == key)
                return this.table[index].value
            index = (index + 1) % this.size;
        }
        return 'Key not founded'
    }
    display() {
        return this.table.map((ele, index) => ({ index, ele }));

    }
}


const table = new LinearProbingHashTable(3);
table.insert("name", "abiram");
table.insert("mane", "abhishek");
table.insert("age", 20);
table.delete("age"); // This will mark "age" slot as null, but it could mess with future inserts.
table.insert("ageAbhi", 18); // This might fail if the table doesn't handle deletion properly.
console.log(table.display());


