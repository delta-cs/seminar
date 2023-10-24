const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let charCode = line.charCodeAt(0);

    let output = "";

    if (charCode >= 65 && charCode <= 90) {
        output = "upper";
    } else if (charCode >= 97 && charCode <= 122) {
        output = "lower";
    }

    console.log(output);

    rl.close();
});
