class MinHeap{
    constructor(){
      this.heap = [];
    }
  
    parent(index){
      return Math.floor((index - 1) / 2);
    }
  
    leftChild(index){
      return (2 * index) + 1;
    }
  
    rightChild(index){
      return (2 * index) + 2;
    }
  
    swap(index1,index2){
      [this.heap[index1],this.heap[index2]] =[this.heap[index2],this.heap[index1]]
    }
  
    insert(data){
      this.heap.push(data)
      let index = this.heap.length-1
      while(index >0 && this.heap[this.parent(index)] > this.heap[index]){
        this.swap(this.parent(index),index)
        index = this.parent(index)
      }
    }
  
    remove(){
      if(this.heap.length == 0) return null
      let root = this.heap[0]
      let lastElement = this.heap.pop()
      if(this.heap.length===0) return root
      this.heap[0] = lastElement
      this.heapify(0)
    }
  
    heapify(index){
      let smallest = index
      let left = this.leftChild(index)
      let right = this.rightChild(index)
      if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
        smallest = left
      }
      if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
        smallest = right
      }
      if(smallest!==index){
        this.swap(index,smallest)
        this.heapify(smallest)
      }
    }
  
    maxheapify(index){
      let largest = index
      let left = this.leftChild(index)
      let right = this.rightChild(index)
      if(left < this.heap.length && this.heap[left] > this.heap[largest]){
        largest = left
      }
      if(right < this.heap.length && this.heap[right] > this.heap[largest]){
        largest = right
      }
      if(largest!==index){
        this.swap(index,largest)
        this.maxheapify(largest)
      }
    }
  
    convertToMax(){
      for(let i=Math.floor(this.heap.length/2) -1;i>=0;i--){
        this.maxheapify(i)
      }
    }
    
    search(data){
      for(let i=0;i<this.heap.length;i++){
        if(this.heap[i] === data){
          return true
        }
      }
      return false
    }
  
    build(array){
      this.heap = array
      for(let i=Math.floor(this.heap.length/2) -1;i>=0;i--){
        this.heapify(i)
      }
    }
  
    display(){
      console.log(this.heap)
    }
  }
  
  const m = new MinHeap()
  let arr=[5,3,8,1,4,2]
  m.build(arr)
  // m.insert(5)
  // m.insert(3)
  // m.insert(8)
  // m.insert(1)
  // m.insert(4)
  // m.remove()
  m.convertToMax()
  m.display()
  // console.log(m.search(90))