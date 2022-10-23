// Name of the task: Pig Latin

/* task: Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.  Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.*/

// solution: 

function translatePigLatin(str) {

	if (str.match(/^[aeiou]/)) return str + "way";

	const cluster = str.match(/^[^aeiou]+/)[0];

	return str.substring(cluster.length) + cluster + "ay";

}

translatePigLatin("consonant");

function uniteUnique(...arr) {

	const newArr = [];

	for (let i = 0; i < arr.length; i++) {

		for (let k = 0; k < arr[i].length; k++) {

			newArr.push(arr[i][k])

		}

	}

	return Array.from(new Set(newArr))
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function uniteUnique(...arr) {

	return Array.from(new Set(arr.reduce((accum, item) => {

		accum.push(...item)

		return accum

	}, [])))
}

const uniteUnique = (...arr) => [...new Set(arr.flat(1))]

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));