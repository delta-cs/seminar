const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
const numbers = [];

rl.on("line", (line) => {
    if (n === undefined) {
        n = parseInt(line);
        return;
    }

    if (line === "") {
        return;
    }

    const number = parseInt(line);
    numbers.push(number);

    if (numbers.length < n) {
        return;
    }

    for (let i = n - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }

    rl.close();
});
