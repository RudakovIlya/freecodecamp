// Name of the task: Missing letters

/* task: Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

// solution: 

function fearNotLetter(str) {

	const newArr = str.split('').map(item => item.charCodeAt());

	return newArr.reduce((accum, item) => accum += item) === 2847 ? undefined : String.fromCharCode(newArr.find((item, i, arr) => {
		if (arr[i + 1] - item === 2) {
			return arr[i]
		}
	}) + 1);
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));