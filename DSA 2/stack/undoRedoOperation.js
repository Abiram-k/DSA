class undoRedoStack {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }
    save(data) {
        this.undoStack.push(data);
        this.redoStack = [];
    }
    undo() {
        if (this.undoStack.length > 0) {
            const undoStackEle = this.undoStack.pop();
            this.redoStack.push(undoStackEle);
            return undoStackEle;
        }
        return 'No value are there!'
    }
    redo() {
        if (this.redoStack.length > 0) {
            const redoStackEle = this.redoStack.pop();
            this.undoStack.push(redoStackEle);
            return redoStackEle;
        }
        return 'No value are there!'
    }
}
const instance = new undoRedoStack();
instance.save(10);
instance.save(20);
console.log(instance.undo())
// console.log(instance.undo())
console.log(instance.redo())
console.log(instance.redo())