//Name of the task: Factorialize a Number

//task: Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

//solution:

function factorialize(num) {

	if (num < 1) {

		return 1;

	}

	return num * factorialize(num - 1);

}

factorialize(10);

function factorialize(num) {

	let result = 1;

	for (let i = 1; i <= num; i++) {

		result *= i;

	}

	return result;

}

console.log(factorialize(5));

function factorialize(num) {

	let result = 1;

	while (num) {

		result *= num--;

	}

	return result;

}

console.log(factorialize(5));