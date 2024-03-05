const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

let linesRead = 0;
const lines = [];

async function readLine() {
    if (lines.length < 1) {
        for await (const line of rl) {
            lines.push(line);
        }
    }

    linesRead++;
    return lines[linesRead - 1];
}

main().then();

async function main() {
    const n = parseInt(await readLine());

    if (n < 1) {
        return;
    }

    const names = [];
    const scores = [];

    let sum = 0;

    for (let i = 0; i < n; i++) {
        await readLine()
        names.push(await readLine());
        scores.push(parseFloat(await readLine()));
        sum += scores[i];
    }

    const average = sum / n;

    for (let i = 0; i < n; i++) {
        if (scores[i] >= average) {
            console.log(names[i]);
        }
    }
}
