// Name of the task: Check if an Object has a Property

// theory: Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

/*

users.hasOwnProperty('Alan');
'Alan' in users;

*/

// Both of these would return true.

// task: Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

// solution:

let users = {
	Alan: {
		age: 27,
		online: true
	},

	Jeff: {
		age: 32,
		online: true
	},

	Sarah: {
		age: 48,
		online: true
	},

	Ryan: {
		age: 19,
		online: true
	}

};

function isEveryoneHere(userObj) {

	return userObj.hasOwnProperty("Alan") &&

		userObj.hasOwnProperty("Jeff") &&

		userObj.hasOwnProperty("Sarah") &&

		userObj.hasOwnProperty("Ryan");
}

console.log(isEveryoneHere(users));