const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;

let countEven = 0;
let countOdd = 0;

lines = 0;

rl.on("line", (line) => {
    if (n === undefined) {
        n = parseInt(line);
        return;
    }

    if (line === "") {
        return;
    }

    lines++;

    const number = parseInt(line);

    if (number % 2 === 0) {
        countEven++;
    } else {
        countOdd++;
    }

    if (lines >= n) {
        rl.close();

        let output = "equal";
        if (countEven > countOdd) {
            output = "even";
        } else if (countOdd > countEven) {
            output = "odd";
        }

        console.log(output);
    }
});
