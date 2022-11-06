//Name of the task: Write Concise Object Literal Declarations Using Object Property Shorthand

//task: Use object property shorthand with object literals to create and return an object with name, age and gender properties.

//solution:

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender,
    };
};
createPerson('Zodiac Hasbro', 56, 'male');
