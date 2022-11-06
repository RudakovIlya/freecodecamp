//Name of the task: Use class Syntax to Define a Constructor Function

//task: Use the class keyword and write a constructor to create the Vegetable class. The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

//solution:

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);
