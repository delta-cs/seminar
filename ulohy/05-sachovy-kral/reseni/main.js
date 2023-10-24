const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = 0;
let check, canMove;

rl.on("line", (line) => {
    lines++;
    if (lines === 1) {
        check = line === "check";
        return;
    }

    canMove = line === "can move";

    rl.close();

    let result;

    if (canMove) {
        if (check) {
            result = "check";
        } else {
            result = "continuing";
        }
    } else {
        if (check) {
            result = "check";
        } else {
            result = "stale";
        }

        result += "mate";
    }

    console.log(result);
});
