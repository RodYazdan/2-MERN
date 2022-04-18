class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Add Front:Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}


    printList() {
		let list = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			list.push(currentNode.value);
			currentNode = currentNode.next;
		}

		console.log(list.join(' --> '));
	}

    addFront(value) {
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;

		this.length++;
		this.printList();
		return this.length;
	}


    // Remove Front: Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        this.head = this.head.next;
		this.length--;
		this.printList();
		return this.length;
    }
    // Front: Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {

    }




}


