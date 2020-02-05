// Syntax for console and file input

// synchronous calls: wait for result, stuck until it arrives
// asynchronous calls: don't wait for result, handle the result whenever it arrivies

const readline = require('readline');

// Conslole configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console input
user.question('Enter a filename: ', function(filename) {
  console.log(filename);
});

//  This part isn't after the console input
console.log('here');
