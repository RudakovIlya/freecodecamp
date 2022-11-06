// Name of the task: Convert HTML Entities

/* task: Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

// solution:

function convertHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&apos;');
}

console.log(convertHTML("Schindler's List"));
console.log(convertHTML("Schindler's List"));
