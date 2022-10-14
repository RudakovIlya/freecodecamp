// Name of the task: Copy an Array with the Spread Operator ...

// theory: While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ... In practice, we can use the spread operator to copy an array like so:

/*

let thisArray = [true, true, undefined, false, null];

let thatArray = [...thisArray];

*/

// thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.

// task: We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

// solution:

function copyMachine(arr, num) {

	let newArr = [];

	while (num >= 1) {

		newArr.push([...arr])

		num--;

	}

	return newArr;

}

console.log(copyMachine([true, false, true], 2));