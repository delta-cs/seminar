const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = 0;
let hours, minutes;

rl.on("line", (line) => {
    lines++;
    if (lines === 1) {
        hours = parseInt(line);
        return;
    }

    minutes = parseInt(line);

    rl.close();

    const minutesTotal = hours * 60 + minutes;

    const startWhite = 6 * 60;
    const endWhite = 21 * 60;
    const intervalWhite = 3 * 60;

    const startRed = 8 * 60;
    const endRed = 22 * 60;
    const intervalRed = 2 * 60;

    const startYellow = 12 * 60 + 45;
    const endYellow = 22 * 60 + 30;
    const intervalYellow = 45;

    let takeWhite = false;
    let takeRed = false;
    let takeYellow = false;

    // Dá se zkrátit na `const takeWhite = <podmínka>`.
    if (minutesTotal >= startWhite && minutesTotal <= endWhite && (minutesTotal - startWhite) % intervalWhite === 0)
        takeWhite = true;

    if (minutesTotal >= startRed && minutesTotal <= endRed && (minutesTotal - startRed) % intervalRed === 0)
        takeRed = true;

    if (minutesTotal >= startYellow && minutesTotal <= endYellow && (minutesTotal - startYellow) % intervalYellow === 0)
        takeYellow = true;

    if (takeWhite)
        console.log("white");

    if (takeRed)
        console.log("red");

    if (takeYellow)
        console.log("yellow");
});
