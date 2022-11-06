//Name of the task: Reuse JavaScript Code Using import

//task: Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

//solution:

import {
    uppercaseString,
    lowercaseString,
} from './useExportToShareACodeBlock.js';

uppercaseString('hello');
lowercaseString('WORLD!');
