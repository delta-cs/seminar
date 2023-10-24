const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = 0;
let mark, attendedContests, absencePercentage, isPolite;

rl.on("line", (line) => {
    lines++;
    switch (lines) {
        case 1:
            mark = parseInt(line);
            return;

        case 2:
            attendedContests = line === "attended";
            return;

        case 3:
            absencePercentage = parseFloat(line);
            return;

        case 4:
            isPolite = line === "polite";
            break;
    }

    rl.close();

    // Dá se zkrátit na `let passed = <podmínka>`.
    let passed = false;
    if (mark < 5 && (absencePercentage <= 20 || attendedContests || (mark === 1 && isPolite))) {
        passed = true;
    }

    // Použití ternárního operátoru.
    console.log(passed ? "passed" : "failed");
});
