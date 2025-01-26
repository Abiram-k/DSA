class TrieNode {
    constructor() {
        this.children = new Map();
        this.endSymbol = false;
    }
}

class Trie {
    constructor(string) {
        if (!string) {
            console.log("Enter a string along with it !");
            return;
        }
        
        this.root = new TrieNode();
        this.populateSuffixTree(string)
    }
    populateSuffixTree(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string);
        }
    }
    insertSubstringStartingAt(index, string) {// "hello" => ( "h" , "e" , "l" , "l" , "o" )
        let current = this.root;
        for (let i = index; i < string.length; i++) {
            let letter = string[i];
            if (!current.children.has(letter)) {
                const newNode = new TrieNode();
                current.children.set(letter, newNode);
            }
            current = current.children.get(letter);
        }
        // at the end of the for loop there will be a empty node
        current.endSymbol = true;
    }

    contains(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            if (!current.children.has(letter)) {
                console.log(false)
                return false
            }
            current = current.children.get(letter);
        }

        console.log(current.endSymbol)
        return current.endSymbol;
    }
}

const trie = new Trie("hello");
trie.contains('hellosdfsdafasdfasdfsadfdfasfas');
