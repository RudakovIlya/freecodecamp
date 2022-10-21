// Name of the task: Implement the filter Method on a Prototype

/*

theory: You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

*/

// task: Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

//solution:

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
	// Only change code below this line
	const newArray = [];

	this.forEach(a => callback(a) ? newArray.push(a) : null)

	// Only change code above this line
	return newArray;
};

const new_s = s.myFilter(function (item) {
	return item % 2 === 1;
});

console.log(new_s);