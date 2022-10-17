// Name of the task: Understand Own Properties

// theory: In the following example, the Bird constructor defines two properties: name and numLegs:

/*

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");

let canary = new Bird("Tweety");

*/

// name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

/*

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
	 ownProps.push(property);
  }
}

console.log(ownProps);

*/

// The console would display the value ["name", "numLegs"].

// task: Add the own properties of canary to the array ownProps.

//solution:

function Bird(name) {

	this.name = name;

	this.numLegs = 2;

}

let canary = new Bird("Tweety");

let ownProps = [];

for (const key in canary) {

	if (canary.hasOwnProperty(key)) {

		ownProps.push(key)

	}

}

console.log(ownProps);

class Birds {

	constructor(name) {

		this.name = name;

		this.numLegs = 2;

	}

}

const myBirds = new Birds('Tweety');

const arrProp = [];

for (const prop in myBirds) {

	if (myBirds.hasOwnProperty(prop)) {

		arrProp.push(prop)

	}

}

console.log(arrProp);