const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let m;
const hoursWorked = [];
let hourlyRatesLoaded = 0;
let salary = 0;

rl.on("line", (line) => {
    if (m === undefined) {
        m = parseInt(line);
        return;
    }

    if (hoursWorked.length < m) {
        if (line === "") {
            return;
        }

        hoursWorked.push(parseInt(line));
        return;
    }

    if (hourlyRatesLoaded < m) {
        if (line === "") {
            return;
        }

        const hourlyRate = parseInt(line);
        salary += hoursWorked[hourlyRatesLoaded] * hourlyRate;
        hourlyRatesLoaded++;
    }

    if (hourlyRatesLoaded >= m) {
        console.log(salary);
        rl.close();
        process.exit(0);
    }
});
