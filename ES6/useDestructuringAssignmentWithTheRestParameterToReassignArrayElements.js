//Name of the task: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

//task: Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

//solution:

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

	const [, , ...arr] = list;

	return arr;
}
const arr = removeFirstTwo(source);
