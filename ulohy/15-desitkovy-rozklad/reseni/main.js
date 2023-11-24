const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("", input => {
    let number = parseInt(input);
    printDecomposition(number);
    rl.close();
});

function printDecomposition(number) {
    let size = 0;
    let temp = number;
    while (temp >= 10) {
        temp = Math.floor(temp / 10);
        size++;
    }

    while (number > 0) {
        let power = Math.pow(10, size);
        let multiple = Math.floor(number / power);

        if (multiple !== 0) {
            console.log(`${multiple} x ${power}`);
        }

        // Neboli `number = number % power`.
        number %= power;
        size--;
    }
}
