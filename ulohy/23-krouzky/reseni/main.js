const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let m;
const mathClubMembers = [];
let b;
const biologyClubMembers = [];

rl.on("line", (line) => {
    if (m === undefined) {
        m = parseInt(line);
        return;
    }

    if (line === "") {
        return;
    }

    if (mathClubMembers.length < m) {
        mathClubMembers.push(line);
        return;
    }

    if (b === undefined) {
        b = parseInt(line);
        return;
    }

    biologyClubMembers.push(line);

    if (biologyClubMembers.length < b) {
        return;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < b; j++) {
            if (mathClubMembers[i] === biologyClubMembers[j]) {
                console.log(mathClubMembers[i]);
            }
        }
    }
    rl.close();
});
