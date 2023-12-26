const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let linesToReadCount;
let linesReadCount = 0;
const lines = [];

rl.on("line", (line) => {
    linesReadCount++;

    if (linesToReadCount === undefined) {
        linesToReadCount = parseInt(line) * 6 + 4;
    }

    lines.push(line);

    if (linesReadCount < linesToReadCount) {
        return;
    }

    rl.close();
    solve();
});

let nextLineIndex = 0;

function readLine() {
    nextLineIndex++;
    return lines[nextLineIndex - 1];
}

function readInt() {
    return parseInt(readLine());
}

function readTime() {
    const hours = readInt();
    const minutes = readInt();
    return hours * 60 + minutes;
}

function solve() {
    const n = readInt();
    readLine();

    const activityNames = [];
    const activityStartTimes = [];
    const activityEndTimes = [];

    for (let i = 0; i < n; i++) {
        activityNames.push(readLine());
        activityStartTimes.push(readTime());
        activityEndTimes.push(readTime());
        readLine();
    }

    const currentTime = readTime();

    let activityFound = false;
    for (let i = 0; i < n; i++) {
        const startTime = activityStartTimes[i];
        const endTime = activityEndTimes[i];

        if ((currentTime >= startTime && currentTime <= endTime)
            || (startTime > endTime && (currentTime >= startTime || currentTime <= endTime))) {
            activityFound = true;
            console.log(activityNames[i]);
            break;
        }
    }

    if (!activityFound) {
        console.log("none");
    }
}
