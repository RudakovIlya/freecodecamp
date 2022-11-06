//Name of the task: Find the Longest Word in a String

//task: Return the length of the longest word in the provided sentence.

// Your response should be a number.

//solution:

function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map((item) => item.length));
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
