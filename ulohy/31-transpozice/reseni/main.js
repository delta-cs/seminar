const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let w;
let h;

const table = [];

let rowsLoaded = 0;
let colsLoaded = 0;

rl.on("line", (line) => {
    if (w === undefined) {
        w = parseInt(line);
        return;
    }

    if (h === undefined) {
        h = parseInt(line);
        for (let i = 0; i < h; i++) {
            table.push([]);
        }

        if (h < 1 || w < 1) {
            rl.close();
        }
        return;
    }

    if (line === "") {
        return;
    }

    table[rowsLoaded].push(line);

    colsLoaded++;
    if (colsLoaded >= w) {
        rowsLoaded++;
        colsLoaded = 0;
    }

    if (rowsLoaded < h) {
        return;
    }

    for (let col = 0; col < w; col++) {
        for (let row = 0; row < h; row++) {
            process.stdout.write(table[row][col]);
        }
        process.stdout.write("\n");
    }

    rl.close();
});
