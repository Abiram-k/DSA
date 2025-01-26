class TrieNode {
    constructor() {
        this.child = new Map();
        this.isEndWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let current = this.root;
        for (let i of word) {
            if (!current.child.has(i)) {
                current.child.set(i, new TrieNode());
            }
            current = current.child.get(i);
        }
        current.isEndWord = true;
    }
    contains(word) {
        let current = this.root;
        for (let i of word) {
            if (!current.child.has(i)) {
                return false
            }
            current = current.child.get(i);
        }
        return current.isEndWord;
    }
    getWordStartsWithPrefix(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.child.has(char))
                return [];
            current = current.child.get(char);
        }
        let result = []
        this._getWordStartsWithPrefixHelper(prefix, result, current);
        return result;
    }
    _getWordStartsWithPrefixHelper(prefix, result, current) {
        if (current.isEndWord) {
            result.push(prefix);
        }
        for (let [char, child] of current.child) {
            this._getWordStartsWithPrefixHelper(prefix + char, result, child);
        }
    }

}
const trie = new Trie();
trie.insert("abiram");
trie.insert("abirampsdpf");
trie.insert("abirami");
console.log(trie.contains("abira"))
const result = trie.getWordStartsWithPrefix('abi');
console.log(result);