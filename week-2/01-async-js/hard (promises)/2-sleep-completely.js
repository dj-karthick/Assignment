/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve, reject)=>{
        const start = performance.now(); // Get the current timestamp
        while (performance.now() - start < milliseconds) {
            // Busy wait (does nothing but keeps the thread occupied)
        }
        resolve();
    })
}    

module.exports = sleep;
