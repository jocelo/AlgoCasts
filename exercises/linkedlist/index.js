// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next=null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.insertAt(data, 0);
	}

	size() {
		let counter = 0
		let node = this.head;

		while(node) {
			node = node.next;
			counter++;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		while(node.next) {
			node = node.next;
		}
		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (this.head) {
			this.head = this.head.next;
		}
	}

	removeLast() {
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let currentNode = this.head.next;
		let prevNode = this.head;

		while (currentNode.next) {
			prevNode = currentNode;
			currentNode = currentNode.next;
		}
		prevNode.next = null;
		return;
	}

	insertLast(data) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		const lastNode = this.getLast();
		lastNode.next = new Node(data);
	}

	getAt(idx) {
		let counter = 0;
		let node = this.head;

		while(node) {
			if (counter === idx) {
				return node;
			}
			node = node.next;
			counter++;
		}
		return null;
	}

	removeAt(idx) {
		if (!this.head) {
			return null;
		}

		if (idx === 0) {
			this.head = this.head.next;	
			return;
		}

		let prevNode = this.getAt(idx-1);

		if (!prevNode.next) {
			return null;
		}

		prevNode.next = prevNode.next.next;
	}

	insertAt(data, idx) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (idx === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		let node = this.getAt(idx-1) || this.getLast();
		node.next = new Node(data, node.next);
	}

	forEach(transformFn) {
		if (!this.head) {
			return;
		}
		let node = this.head;
		while(node) {
			transformFn(node);
			node = node.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;

		while(node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
