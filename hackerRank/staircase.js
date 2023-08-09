//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
function printStaircase(size) {
    for (let i = 1; i <= size; i++) {
        const spaces = ' '.repeat(size - i);
        const hashtags = '#'.repeat(i);
        console.log(spaces + hashtags);
    }
}

const staircaseSize = 6; // Change this to the desired size
printStaircase(staircaseSize);

/*
It uses the String.prototype.repeat() method to repeat spaces and hashtags the required number of times.
Finally, it prints each step using console.log().
You can change the value of staircaseSize to the desired size of the staircase, and the code will print the staircase pattern with the specified output format.
*/