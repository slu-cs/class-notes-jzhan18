// Syntax for console and file input

// synchronous calls: wait for result, stuck until it arrives
// asynchronous calls: don't wait for result, handle the result whenever it arrivies

const readline = require('readline');
const fs = require('fs');

// Conslole configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console input
user.question('Enter a filename: ', function(filename) {
  // File configuration
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  // Asynchronous line-by-line input
  file.on('line', function(line){
    console.log(line);
  });

  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});

//  This part isn't after the console input
console.log('here');
