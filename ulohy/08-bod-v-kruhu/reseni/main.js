const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = 0;
let diameter, centerX, centerY, pointX, pointY;

rl.on("line", (line) => {
    lines++;
    switch (lines) {
        case 1:
            diameter = parseFloat(line);
            return;

        case 2:
            centerX = parseFloat(line);
            return;

        case 3:
            centerY = parseFloat(line);
            return;

        case 4:
            pointX = parseFloat(line);
            return;

        case 5:
            pointY = parseFloat(line);
            break;
    }

    const inside = liesInside(diameter / 2, centerX, centerY, pointX, pointY);

    console.log(inside ? "inside" : "outside");
});

function liesInside(radius, centerX, centerY, pointX, pointY) {
    const a = Math.abs(centerX - pointX);
    const b = Math.abs(centerY - pointY);
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    return c <= radius;
}
