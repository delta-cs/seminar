const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let p, f, h;

rl.on("line", (line) => {
    if (p === undefined) {
        p = parseInt(line);
        return;
    }
    else if (f === undefined) {
        f = parseInt(line);
        return;
    }
    h = parseInt(line);

    printFlag(p, f, h);

    rl.close();
});

function printFlag(poleLength, flagWidth, heightAboveGround) {
    const flagHeight = flagWidth * 2 - 1;

    if (flagHeight + heightAboveGround > poleLength) {
        console.log("invalid");
        return;
    }

    for (let i = 0; i < poleLength - flagHeight - heightAboveGround; i++) {
        console.log("|");
    }

    for (let i = 1; i <= flagWidth; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }

    for (let i = flagWidth - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }

    for (let i = 0; i < heightAboveGround; i++) {
        console.log("|");
    }
}
