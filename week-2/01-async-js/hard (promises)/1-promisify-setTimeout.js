/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
 function wait(n) {
     return new Promise((resolve, reject)=>{
        setTimeout( ()=> resolve(), n*1000);
     });
 };

 
//  console.log(wait);
//  wait(5000).then(result => console.log(result))
//  console.log("End");

 module.exports = wait;

