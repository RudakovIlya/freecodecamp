// Name of the task: DNA Pairing

/* task: Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

// solution: 

function pairElement(str) {
	const obj = Object.entries({
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	})
	const array = str.split('');

	const newArray = [];

	for (let i = 0; i < array.length; i++) {

		if (array[i] === obj[i]['0']) {
			newArray.push(obj[i])
		}

	}
	return newArray
}

console.log(pairElement("CTCTA"));