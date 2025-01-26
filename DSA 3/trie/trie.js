
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }
        current.isEndWord = true;
    }

    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children.has(char)) {
                console.log(false);
                return;
            }
            current = current.children.get(char);
        }
        return current.isEndWord;
    }
    
    startWithPrefix(prefix) {
        let current = this.root;
        if (!current) return false
        for (let i of prefix) {
            if (!current.children.has(i))
                return false;
            current = current.children.get(i);
        }
        return true
    }


    getWordsWithPrefix(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children.has(char)) {
                return [];
            }
            current = current.children.get(char);
        }

        const results = [];
        this._dfs(current, prefix, results);
        return results;
    }

    _dfs(node, prefix, results) {
        if (node.isEndWord) {
            results.push(prefix);
        }
        for (let [char, childNode] of node.children) {
            this._dfs(childNode, prefix + char, results);
        }
    }
    remove(word) {
        this._removeWordHelper(word, this.root, 0)
    }
    _removeWordHelper(word, node, index) {
        if (index === word.length) {
            if (!node.isEndWord)
                return false;
            node.isEndWord = false;
            return node.children.size === 0
        }
        let char = word[index];
        let childNode = node.children.get(char);
        if (!childNode) return false; // if the child node is not there that means , the word is not in the trie.
        let isToBeDeleted = this._removeWordHelper(word, childNode, index + 1);

        if (isToBeDeleted) {
            node.children.delete(char);
            return (!node.isEndWord && node.children.size === 0)
        }
        return false;
    }
}


const trie = new Trie();
trie.insert("hello")
trie.insert("Abiram")
trie.insert("Abhishek")
trie.insert("Sandhya")
trie.insert("Sandhu")
trie.remove("Sandhu")
console.log(trie.startWithPrefix('S'))
const wordsStartsWith = trie.getWordsWithPrefix("S");
console.log(wordsStartsWith)