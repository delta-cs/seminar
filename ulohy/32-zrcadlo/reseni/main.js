const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let w;
let h;
let direction;

const paper = [];

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
            paper.push([]);
        }

        if (h < 1 || w < 1) {
            rl.close();
        }
        return;
    }

    if (direction === undefined) {
        direction = line;
        return;
    }

    if (line === "") {
        return;
    }

    paper[rowsLoaded].push(line);

    colsLoaded++;
    if (colsLoaded >= w) {
        rowsLoaded++;
        colsLoaded = 0;
    }

    if (rowsLoaded < h) {
        return;
    }

    switch (direction) {
        case "p":
            for (let row = 0; row < h; row++) {
                for (let col = w - 1; col >= 0; col--) {
                    process.stdout.write(paper[row][col]);
                }
                process.stdout.write("\n");
            }
            break;

        case "s":
            for (let row = h - 1; row >= 0; row--) {
                for (let col = 0; col < w; col++) {
                    process.stdout.write(paper[row][col]);
                }
                process.stdout.write("\n");
            }
            break;
    }

    rl.close();
});
