// Name of the task: Title Case a Sentence

// task: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// solution:

function titleCase(str) {
    return str
        .split(' ')
        .map(
            (item) =>
                item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
        )
        .join(' ');
}

titleCase("I'm a little tea pot");
