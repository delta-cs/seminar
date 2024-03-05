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
    const l = await readInt();
    await readLine();
    const j = await readInt();
    await readLine();

    const availableJumps = [];
    for (let i = 0; i < j; i++) {
        availableJumps.push(await readInt());
    }

    const memo = [];
    for (let i = 0; i < l + 1; i++) {
        memo.push(0);
    }

    memo[l] = 1;

    for (let i = memo.length - 2; i >= 0; i--) {
        memo[i] = numberOfWays(l, i, availableJumps, memo);
    }

    console.log(memo[0]);
}

function numberOfWays(target, currentPosition, availableJumps, memo) {
    let sum = 0;

    for (const availableJump of availableJumps) {
        const nextPosition = currentPosition + availableJump;

        if (nextPosition > target) {
            continue;
        }

        sum += memo[nextPosition];
    }

    return sum;
}

async function readInt() {
    return parseInt(await readLine());
}
