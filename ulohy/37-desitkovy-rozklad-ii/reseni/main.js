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
    const number = await readLine();
    let decimalDotIndex = number.indexOf(".");

    if (decimalDotIndex === -1) {
        decimalDotIndex = number.length;
    }

    for (let i = 0; i < decimalDotIndex; i++) {
        const multiple = number[i];

        if (multiple === "0") {
            continue;
        }

        process.stdout.write(`${multiple} x 1`);
        for (let j = 0; j < decimalDotIndex - i - 1; j++) {
            process.stdout.write("0");
        }

        process.stdout.write("\n");
    }

    for (let i = decimalDotIndex + 1; i < number.length; i++) {
        const multiple = number[i];

        if (multiple === "0") {
            continue;
        }

        process.stdout.write(`${multiple} x 0.`);
        for (let j = 0; j < i - decimalDotIndex - 1; j++) {
            process.stdout.write("0");
        }

        process.stdout.write("1\n");
    }
}
