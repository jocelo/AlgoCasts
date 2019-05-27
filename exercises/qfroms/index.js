// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.leftStack = new Stack();
		this.rightStack = new Stack();
	}

	moveLeftToRight() {
		while(this.leftStack.peek()) {
			this.rightStack.push( this.leftStack.pop() );
		}
	}

	moveRightToLeft() {
		while(this.rightStack.peek()) {
			this.leftStack.push( this.rightStack.pop() );
		}
	}

	add(newElm) {
		this.leftStack.push(newElm);
	}

	remove() {
		this.moveLeftToRight();
		const returnElm = this.rightStack.pop();
		this.moveRightToLeft();

		return returnElm;
	}

	peek() {
		this.moveLeftToRight();
		const elm = this.rightStack.peek();
		this.moveRightToLeft();

		return elm;
		
	}
}

module.exports = Queue;
