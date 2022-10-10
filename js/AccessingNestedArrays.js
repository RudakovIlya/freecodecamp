//Name of the task: Accessing Nested Arrays

//task: Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

//solution:

const myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

const secondTree = myPlants[1].type;