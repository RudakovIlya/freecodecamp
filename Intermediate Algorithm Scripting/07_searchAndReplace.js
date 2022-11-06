// Name of the task: Search and Replace

/* task: Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog. */

// solution:

function myReplace(str, before, after) {
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        return str.replace(
            before,
            after.slice(0, 1).toUpperCase() + after.slice(1)
        );
    } else if (before.charAt(0) === before.charAt(0).toLowerCase()) {
        return str.replace(
            before,
            after.slice(0, 1).toLowerCase() + after.slice(1)
        );
    } else {
        return str.replace(before, after);
    }
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
