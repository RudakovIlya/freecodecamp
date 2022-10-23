// Name of the task: Spinal Tap Case

/* task: Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

// solution: 

function spinalCase(str) {

	return str.split(/(?=^\w|[A-Z]|\b\w|_\w|\s|-\w)/g).filter(item => item !== ' ' && item !== '-' && item !== '_').map(item => item.toLowerCase()).join('-')

}

console.log(spinalCase("This Is Spinal Tap"));  /*should return the string this-is-spinal-tap.*/
console.log(spinalCase("thisIsSpinalTap"));  /*should return the string this-is-spinal-tap.*/
console.log(spinalCase("The_Andy_Griffith_Show"));  /*should return the string the-andy-griffith-show.*/
console.log(spinalCase("Teletubbies say Eh-oh"));  /*should return the string teletubbies-say-eh-oh.*/
console.log(spinalCase("AllThe-small Things"));  /*should return the string all-the-small-things.*/
