//Name of the task: Chunky Monkey

//task: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//solution:

function chunkArrayInGroups(arr, size) {

	const newArr = [];

	while (arr.length) {

		newArr.push(arr.splice(0, size))

	}

	return newArr

}
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)) 
