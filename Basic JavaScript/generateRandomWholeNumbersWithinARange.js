//Name of the task: Generate Random Whole Numbers within a Range

//task: Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

//solution:

function randomRange(myMin, myMax) {
    myMin = Math.ceil(myMin);

    myMax = Math.floor(myMax);

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
