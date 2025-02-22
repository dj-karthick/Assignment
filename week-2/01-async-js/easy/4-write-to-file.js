// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

console.log("Before writing the file.");

fs.writeFile('example.txt', 'Hello, I am karthick raja from madipakkam.', (err)=>{
     if (err) throw err;

     console.log("After writing the file");

});

console.log("This runs while file is being writing.");