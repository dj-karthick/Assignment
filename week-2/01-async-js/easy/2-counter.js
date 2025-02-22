//## Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function currentTime(){
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);

    setTimeout(currentTime, 1000);
};


currentTime();
































































//(Hint: setTimeout)