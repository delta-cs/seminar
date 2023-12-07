const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cols;
let rows;

rl.on("line", (line) => {
    if (cols === undefined) {
        cols = parseInt(line);
        return;
    }

    rows = parseInt(line);

    printMultiplicationTable(rows, cols);

    rl.close();
});

function printMultiplicationTable(rows, cols) {
    let tableWidth = 1;
    for (let col = 1; col <= cols; col++) {
        tableWidth += countDigits(col * rows) + 3;
    }

    printHorizontalLine(tableWidth);

    for (let row = 1; row <= rows; row++) {
        process.stdout.write("|");

        for (let col = 1; col <= cols; col++) {
            const result = row * col;
            const columnWidth = countDigits(col * rows);
            for (let pad = 0; pad <= columnWidth - countDigits(result); pad++) {
                process.stdout.write(" ");
            }

            process.stdout.write(result + " ");
            process.stdout.write("|");
        }
        process.stdout.write("\n");

        printHorizontalLine(tableWidth);
    }
}

function countDigits(number) {
    let count = 0;
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}

function printHorizontalLine(width) {
    for (let i = 0; i < width; i++) {
        process.stdout.write("-");
    }
    process.stdout.write("\n");
}
