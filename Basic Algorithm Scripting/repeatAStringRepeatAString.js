//Name of the task: Repeat a String Repeat a String

//task: Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

//solution:

function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return '';
    }

    return str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes('abc', 3));

function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

console.log(repeatStringNumTimes('abc', 3));

function repeatStringNumTimes(str, num) {
    let string = '';

    for (let i = 0; i < num; i++) {
        string += str;
    }

    return string;
}

console.log(repeatStringNumTimes('abc', 3));
