//Name of the task: Nesting For Loops

//task: Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

//solution:

function multiplyAll(arr) {
	let product = 1;

	for (let i = 0; i < arr.length; i++) {

		for (let k = 0; k < arr[i].length; k++)
			product += arr[i][k]
	}

	return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);