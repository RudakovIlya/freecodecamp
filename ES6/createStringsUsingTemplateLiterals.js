//Name of the task: Use Destructuring Assignment to Pass an Object as a Function's Parameters

//task: Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings. Use an iterator method (any kind of loop) to get the desired output (shown below).

//solution:

const result = {
	success: ["max-length", "no-amd", "prefer-arrow-functions"],
	failure: ["no-var", "var-on-top", "linebreak"],
	skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {

	const failureItems = [];

	for (const key of arr) {

		failureItems.push(`<li class="text-warning">${key}</li>`)

	}

	return failureItems;
}

const failuresList = makeList(result.failure);

