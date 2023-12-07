const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let side, height;

rl.on("line", (line) => {
    if (side === undefined) {
        side = parseInt(line);
        return;
    }
    height = parseInt(line);
    
    printRhomboid(side, height);

    rl.close();
});

function printRhomboid(side, height) {
    for (let i = 0; i < height; i++) {
        let line = "";
        for (let j = 0; j < height - i - 1; j++) {
            line += " ";
        }
        for (let j = 0; j < side; j++) {
            const output = (i > 0 && i < height - 1 && j > 0 && j < side - 1) ? " " : "#";
            line += output;
        }
        console.log(line);
    }
}
