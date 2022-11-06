// Name of the task: Create a JavaScript Promise

// theory: A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

//! const myPromise = new Promise((resolve, reject) => {});

// task: Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

// solution:

const makeServerRequest = new Promise((resolve, reject) => {});
