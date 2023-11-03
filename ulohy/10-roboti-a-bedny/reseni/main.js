const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = 0;
let b, r, t, c;

rl.on("line", (line) => {
    lines++;
    switch (lines) {
        case 1:
            b = parseInt(line);
            return;

        case 2:
            r = parseInt(line);
            return;

        case 3:
            t = parseFloat(line);
            return;

        case 4:
            c = parseInt(line);
            return;
    }

    let result;

    switch (c) {
        case 1:
            const r2 = parseInt(line);
            result = solveBoxes(b, r, r2);
            break;

        case 2:
            const t2 = parseFloat(line);
            result = solveRobots(r, t, t2);
            break;
    }

    console.log(result);
});

function solveBoxes(b, r, r2) {
    return Math.floor(b * r2 / r);
}

function solveRobots(r, t, t2) {
    return Math.ceil(r * t / t2);
}
