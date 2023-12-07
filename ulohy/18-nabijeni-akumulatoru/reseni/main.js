const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;

let charging = false;
let discharging = false;

let lastChargeLevel = 0;

lines = 0;

rl.on("line", (line) => {
    if (n === undefined) {
        n = parseInt(line);
        return;
    }

    if (line === "") {
        return;
    }

    lines++;

    const chargeLevel = parseFloat(line);

    if (lines > 1) {
        if (chargeLevel > lastChargeLevel) {
            charging = true;
        } else if (chargeLevel < lastChargeLevel) {
            discharging = true;
        }
    }

    lastChargeLevel = chargeLevel;

    if (lines >= n) {
        rl.close();

        let output = "unused";

        if (charging) {
            if (discharging) {
                output = "both";
            } else {
                output = "charging";
            }
        } else if (discharging) {
            output = "discharging";
        }

        console.log(output);
    }
});
