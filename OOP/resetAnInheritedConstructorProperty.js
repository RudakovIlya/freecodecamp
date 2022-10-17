// Name of the task: Reset an Inherited Constructor Property

// theory: When an object inherits its prototype from another object, it also inherits the supertype's constructor property.


// Here's an example:

/*

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

*/

// But duck and all instances of Bird should show that they were constructed by Bird and not Animal. To do so, you can manually set the constructor property of Bird to the Bird object:

/*

Bird.prototype.constructor = Bird;
duck.constructor

*/

// task: Fix the code so duck.constructor and beagle.constructor return their respective constructors.

//solution:

function Animal() { }

function Bird(name, color) {

	this.name = name;

	this.color = color;

}

function Dog(name, color) {

	this.name = name;

	this.color = color;

}

Bird.prototype = Object.create(Animal.prototype);

Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;

Dog.prototype.constructor = Dog;

let duck = new Bird();

let beagle = new Dog();
