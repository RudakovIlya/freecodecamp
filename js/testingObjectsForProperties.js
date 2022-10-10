
//Name of the task: Testing Objects for Properties

//task: Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

//solution:

function checkObj(obj, checkProp) {

	// Only change code below this line

	return obj.hasOwnProperty(checkProp) ? obj[checkProp] : 'Not Found';

	// Only change code above this line

}