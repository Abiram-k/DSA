class TrieNode {
  constructor() {
    this.children = {}
    this.isEnd = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEnd = true
  }

  search(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        return false
      }
      node = node.children[char];
    }
    return node.isEnd;
  }

  startWith(prefix) {
    let node = this.root
    for (let char of prefix) {
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return true
  }

  getAllWords() {
    let words = []
    this.collectWords(this.root, '', words)
    return words
  }

  collectWords(node, prefix, words) {
    if (node.isEnd) {
      words.push(prefix)
    }
    for (let char in node.children) {
      this.collectWords(node.children[char], prefix + char, words)
    }
  }

  autocomplete(prefix) {
    let node = this.root
    for (let char of prefix) {
      if (!node.children[char]) {
        return []
      }
      node = node.children[char]
    }
    let words = []
    this.collectWords(node, prefix, words)
    return words
  }

  remove(word) {
    this.removeWord(this.root, word, 0)
  }

  removeWord(node, word, index) {
    if (index === word.length) {
      if (!node.isEnd) {// that means no word is there
        return false
      }
      node.isEnd = false // setting to false
      return Object.keys(node.children).length === 0 // that means it has childrens, if it has then we can delete this node
    }
    let char = word[index]
    let childNode = node.children[char];
    if (!childNode) {
      return false
    }
    let shouldDeleted = this.removeWord(childNode, word, index + 1)

    if (shouldDeleted) {
      delete node.children[char]
      return !node.isEnd && Object.keys(node.children).length === 0 // node not and end and no children
    }
    return false
  }
}

const trie = new Trie()
trie.insert('cat')
trie.insert('car')
trie.insert('dog')
trie.insert('hello')
trie.insert('hell')
trie.remove('hello')
console.log(trie.getAllWords()) // true