// Name of the task: Spinal Tap Case

/* task: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

// solution: 

function spinalCase(str) {
	return str.split(' ').map(item => {

		if (item.toUpperCase() == item) {

			return ` ${item}`;

		}
		return item
	}).join(' ').split(/\W/).map(item => item.toLowerCase()).join('-')
}

console.log(spinalCase('This Is Spinal Tap'));

