// Name of the task: Sum All Primes

/* task: A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

// solution: 

function sumPrimes(num) {
	let sum = 0;
	nextPrime:
	for (let i = 2; i <= num; i++) {

		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue nextPrime;
		}

		sum += i;
	}
	return sum
}

console.log(sumPrimes(10));;