const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];

rl.on('line', (input) => {
    inputLines.push(input);

    // FIX: Once we have exactly 3 lines of input, stop listening!
    if (inputLines.length === 3) {
        rl.close(); // This automatically triggers the 'close' event below
    }
});

rl.on('close', () => {
    let n = Number(inputLines[0]);
    let nums = inputLines[1].split(' ').map(Number);
    let target = Number(inputLines[2]);

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(i, j);
                return; 
            }
        }
    }
});