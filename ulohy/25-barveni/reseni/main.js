const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let w;
let h;
let n;
let rectanglesLoaded = 0;
const grid = [];

let x;
let y;
let a;
let b;

rl.on("line", (line) => {
    if (w === undefined) {
        w = parseInt(line);
        return;
    }

    if (h === undefined) {
        h = parseInt(line);
        for (let i = 0; i < w; i++) {
            grid.push([]);
            for (let j = 0; j < h; j++) {
                grid[i].push(false);
            }
        }
        return;
    }

    if (n === undefined) {
        n = parseInt(line);
        return;
    }

    if (line === "") {
        return;
    }

    if (x === undefined) {
        x = parseInt(line);
        return;
    }

    if (y === undefined) {
        y = parseInt(line);
        return;
    }

    if (a === undefined) {
        a = parseInt(line);
        return;
    }

    b = parseInt(line);

    rectanglesLoaded++;

    for (let col = x - 1; col < x + a - 1; col++) {
        for (let row = y - 1; row < y + b - 1; row++) {
            grid[col][row] = true;
        }
    }

    if (rectanglesLoaded < n) {
        x = y = a = b = undefined;
        return;
    }

    for (let row = 0; row < h; row++) {
        for (let col = 0; col < w; col++) {
            process.stdout.write(grid[col][row] ? "#" : ".");
        }
        process.stdout.write("\n");
    }

    rl.close();
});
