// Name of the task: Steamroller

/* task: Flatten a nested array. You must account for varying levels of nesting. */

// solution: 

function steamrollArray(arr) {
	const newArr = [];

	while (arr.length) {

		const un = arr.shift();

		if (Array.isArray(un)) {

			arr.unshift(...un);

		} else {

			newArr.push(un);

		}

	}

	return newArr

}

function steamrollArray(arr) {

	const newArr = [];

	for (let i = 0; i < arr.length; i++) {

		if (Array.isArray(arr[i])) {

			newArr.push(...steamrollArray(arr[i]))

		} else {

			newArr.push(arr[i])

		}

	}

	return newArr

}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
