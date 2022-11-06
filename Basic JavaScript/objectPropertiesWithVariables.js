//Name of the task: Accessing Object Properties with Variables

//task: Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

//solution:

// Setup
const testObj = {
    12: 'Namath',
    16: 'Montana',
    19: 'Unitas',
};

// Only change code below this line
const playerNumber = 16;
const player = testObj[playerNumber];
