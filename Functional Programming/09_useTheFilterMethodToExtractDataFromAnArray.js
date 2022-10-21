// Name of the task: Use the filter Method to Extract Data from an Array
/*

theory: Another useful array function is Array.prototype.filter(), or simply filter().

filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

*/

/*

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30);

The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].

*/

// task: Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

//solution: