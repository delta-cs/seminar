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
    let text = (await readLine()).toLowerCase();
    let language = await readLine();

    if (language === "cz") {
        text = text.replaceAll("ch", "*");
    }

    text = text.replaceAll(" ", "");

    let isPalindrome = true;
    let half = Math.ceil(text.length / 2);

    for (let i = 0; i < half; i++) {
        if (text[i] !== text[text.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }

    console.log(isPalindrome ? "true" : "false");
}
