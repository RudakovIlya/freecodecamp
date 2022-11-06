//Name of the task: Use export to Share a Code Block

//task: There are two string-related functions in the editor. Export both of them using the method of your choice.

//solution:

const uppercaseString = (string) => {
    return string.toUpperCase();
};

const lowercaseString = (string) => {
    return string.toLowerCase();
};

export { uppercaseString, lowercaseString };
