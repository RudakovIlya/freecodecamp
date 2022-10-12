//Name of the task: Use getters and setters to Control Access to an Object

//task: Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

//solution:

class Thermostat {
	constructor(fahrenheit) {
		this.fahrenheit = fahrenheit;
	}

	get temperature() {
		return (5 / 9) * (this.fahrenheit - 32);
	}

	set temperature(celsius) {
		this.fahrenheit = (celsius * 9.0) / 5 + 32;
	}
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;