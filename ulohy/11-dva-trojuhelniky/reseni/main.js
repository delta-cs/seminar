const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = 0;
let a, b, c, k, l, m;

rl.on("line", (line) => {
    lines++;
    switch (lines) {
        case 1:
            a = parseFloat(line);
            return;

        case 2:
            b = parseFloat(line);
            return;

        case 3:
            c = parseFloat(line);
            return;

        case 4:
            k = parseFloat(line);
            return;

        case 5:
            l = parseFloat(line);
            return;

        case 6:
            m = parseFloat(line);
            break;
    }

    console.log(solve(a, b, c, k, l, m));
});

function solve(a, b, c, k, l, m) {
    if (!isValid(a, b, c) || !isValid(k, l, m))
        return "invalid";

    if (areCongruent(a, b, c, k, l, m))
        return "congruent";

    if (areSimilar(a, b, c, k, l, m))
        return "similar";

    return "different";
}

function isValid(a, b, c) {
    var longestSide = Math.max(a, Math.max(b, c));
    return longestSide < a + b + c - longestSide;
}

function areCongruent(a, b, c, k, l, m) {
    return (a === k && ((b === l && c === m) || (b === m && c === l)))
        || (a === l && ((b === k && c === m) || (b === m && c === k)))
        || (a === m && ((b === k && c === l) || (b === l && c === k)));
}

function areSimilar(a, b, c, k, l, m) {
    let ratio = a / k;
    if ((b / l === ratio && c / m === ratio) || (c / l === ratio && b / m === ratio))
        return true;

    ratio = b / k;
    if ((a / l === ratio && c / m === ratio) || (c / l === ratio && a / m === ratio))
        return true;

    ratio = c / k;
    if ((a / l === ratio && b / m === ratio) || (b / l === ratio && a / m === ratio))
        return true;

    return false;
}
