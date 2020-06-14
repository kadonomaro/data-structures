class Queue {
    constructor() {
        this.list = [];
    }

    enqueue(value) {
        this.list.push(value)
    }

    dequeue() {
        if (!this.list.length) return;
        return this.list.shift();
    }

    isEmpty() {
        return !this.list.length;
    }

    top() {
        return this.list[0];
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
const deleted = queue.dequeue();
console.log(deleted);
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue);
console.log(queue.isEmpty());