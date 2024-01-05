const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
const cityNames = [];
const cityLocations = [];

rl.on("line", (line) => {
    if (n === undefined) {
        n = parseInt(line);
        return;
    }

    if (line === "") {
        return;
    }

    if (cityLocations.length < cityNames.length) {
        cityLocations.push(parseInt(line));
        return;
    }

    if (cityNames.length < n) {
        cityNames.push(line);
        return;
    }

    const chestLocation = parseInt(line);

    sortByDistance(cityNames, cityLocations, chestLocation);

    for (let i = 0; i < n; i++) {
        console.log(cityNames[i]);
    }

    rl.close();
});

function sortByDistance(cityNames, cityLocations, chestLocation) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < cityLocations.length - 1; i++) {
            let distance1 = Math.abs(chestLocation - cityLocations[i]);
            let distance2 = Math.abs(chestLocation - cityLocations[i + 1]);

            if (distance1 < distance2 || (distance1 === distance2 && cityLocations[i] < cityLocations[i + 1])) {
                continue;
            }

            const tempLocation = cityLocations[i];
            cityLocations[i] = cityLocations[i + 1];
            cityLocations[i + 1] = tempLocation;

            const tempName = cityNames[i];
            cityNames[i] = cityNames[i + 1];
            cityNames[i + 1] = tempName;

            swapped = true;
        }
    }
}
