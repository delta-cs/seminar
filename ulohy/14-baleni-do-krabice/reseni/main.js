const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let boxVolume;
let totalObjectsVolume = 0;

rl.on("line", line => {
    if (boxVolume === undefined) {
        boxVolume = parseFloat(line);
        return;
    }

    if (line === "") {
        return;
    }

    const currentObjectVolume = parseFloat(line);

    if (totalObjectsVolume + currentObjectVolume > boxVolume || currentObjectVolume === -1) {
        rl.close();
        return;
    }

    totalObjectsVolume += currentObjectVolume;
});

rl.on("close", () => {
    console.log(totalObjectsVolume);
});
