class Stack {
    constructor() {
        this.elements = [];
        this.length = 0;
    }

    push(element) {
        if (element) {
            this.elements.push(element);
            this.length++;
        } else {
            throw new Error('Element must not be empty')
        }
    }

    pop() {
        if (this.length > 0) {
            this.length--;
            return this.elements.pop();
        }
        return
    }

    peek() {
        return this.elements[this.length - 1];
    }

    size() {
        return this.length;
    }
}

const stack = new Stack();

stack.pop();
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