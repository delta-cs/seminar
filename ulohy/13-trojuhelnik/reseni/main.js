const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const a = parseInt(line);

    for (let i = 0; i < a; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }

    rl.close();
});
