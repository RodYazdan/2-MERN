class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(data) {
		this.head = {
			data: data,
			next: null
		};
		this.length = 1;
	}

	
	// Add Front
	// Write a method that accepts a data and create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(data) {
		// Creating a new node object with the data provided
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;

		this.length++;
		return this.head;
	}

	// Remove Front
    // Remove Front: Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
		// If the list is empty, place the new node as the head 
		
		if(this.head) {
			this.head = this.head.next;
			this.length--;
			return this.head;
		}
		else
		{
			return null;
		}
	
    }

    // Front
	// Write a method to return the data (not the node) at the head of the list. If the list is empty, return null.
    front() {
		if(this.head) {
			return this.head.data;
		}
		else
		{
			return null;
		}
	}
	// Display
	// Create display() that returns a string containing all list datas. Build what you wish console.log(myList) did!

    display() {
    	// neatly display nodes in my list
		//We first have to tell our train attendant that we want them to start at the front of the train
		let runner=this.head;
		let sum="";
	
		while(runner !== null){
			//Since the runner is set to the current node, its data will be equal to the data of the node they                 are currently on
				myList+=runner.data;
			//Tell our attendant to move to the next car
			runner=runner.next;
		}
		return myList
		console.log(myList)
	}

}

