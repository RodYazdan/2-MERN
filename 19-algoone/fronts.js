class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.length = 1;
	}

	// Add Front
	// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    addFront(value) {
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this.head;
	}


	// Remove Front
	// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
		if(this.head){
			this.head = this.head.next;
			this.length--;
			return this.head;
		}
		else{
			return null;
		}
		
    }

	// Front
	// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {
		if(this.head){
			return this.head.data;
		}
		else{
			return null;
		}
    }

	// Display
	// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

	display() {
		let runner=this.head
		let myList=""
		while(runner !== null){
			myList+=runner.data
			runner=runner.next
		}
		return myList
		console.log(myList);

    }

}


