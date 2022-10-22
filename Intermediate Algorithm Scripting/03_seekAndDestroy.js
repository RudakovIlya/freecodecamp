// Name of the task: Seek and Destroy

// task: You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. Note: You have to use the arguments object.

// solution: 

function destroyer(arr) {

	const currArr = arguments[0];

	const twoArray = Array.from(arguments).slice(1);

	return currArr.filter((item, i, arr) => twoArray.indexOf(item) === -1)
}

function destroyer(arr, ...ost) {

	return arr.filter(item => !ost.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));