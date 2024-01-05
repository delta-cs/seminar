const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let s;
let n;
const numbers = [];

rl.on("line", (line) => {
    if (s === undefined) {
        s = parseInt(line);
        return;
    }

    if (n === undefined) {
        n = parseInt(line);

        if (n > 0) {
            // Neboli `s = s % n`.
            s %= n;
        }
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

    const numbersShifted = [];
    for (let i = 0; i < n; i++) {
        let newIndex = i + s;
        if (newIndex < 0) {
            newIndex += n;
        } else if (newIndex >= n) {
            newIndex -= n;
        }

        numbersShifted[newIndex] = numbers[i];
    }

    for (let i = 0; i < n; i++) {
        console.log(numbersShifted[i]);
    }

    rl.close();
});
