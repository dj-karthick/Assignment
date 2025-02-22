// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

console.log("Before the changes are made to start.");

fs.readFile('example.txt', 'utf8', (err, data)=>{
    if (err){
        console.error("Error reading the file :", err);
        return;
    };

    //Replace the old content with new one.
    modifiedData = data.replace(/\s+/g, ' ').trim();   //I will remove multiple white spaces and leave with single space.

    fs.writeFile('example.txt', modifiedData, (err)=>{
        if (err) throw err;

        console.log("The file is cleaned.");
    });
});

console.log("While file is being cleaned.")