// Name of the task: Sorted Union

/* task: Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.*/

// solution:

function uniteUnique(...arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            newArr.push(arr[i][k]);
        }
    }

    return Array.from(new Set(newArr));
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function uniteUnique(...arr) {
    return Array.from(
        new Set(
            arr.reduce((accum, item) => {
                accum.push(...item);

                return accum;
            }, [])
        )
    );
}

const uniteUnique = (...arr) => [...new Set(arr.flat(1))];

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
