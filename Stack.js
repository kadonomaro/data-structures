class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }

    pop() {
        return this.elements.pop();
    }

    peek() {
        return this.elements[this.elements.length - 1]
    }

    size() {
        return this.elements.length
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);

console.log(stack.pop());
console.log(stack);
console.log(stack.peek());

console.log(stack.size());