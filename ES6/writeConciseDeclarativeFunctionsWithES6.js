//Name of the task: Write Concise Declarative Functions with ES6

//task: Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

//solution:


const bicycle = {
	gear: 2,
	setGear(newGear) {
		this.gear = newGear;
	}
};
