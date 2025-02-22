//## Create a counter in JavaScript

//We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
//It should go up as time goes by in intervals of 1 second



setInterval( () => {
    const currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log(`${hour}:${minute}:${seconds}`);
}, 1000);