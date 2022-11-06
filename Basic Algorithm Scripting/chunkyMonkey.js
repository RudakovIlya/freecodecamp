//Name of the task: Chunky Monkey

//task: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

//solution:

function chunkArrayInGroups(arr, size) {
    const newArr = [];

    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }

    return newArr;
}
