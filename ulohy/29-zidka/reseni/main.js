const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

let linesRead = 0;
const lines = [];

async function readLine() {
    if (lines.length < 1) {
        for await (const line of rl) {
            lines.push(line);
        }
    }

    linesRead++;
    return lines[linesRead - 1];
}

const BRICK_WIDTH = 11;
const BRICK_HEIGHT = 4;

main().then();

async function main() {
    const h = parseInt(await readLine());
    const w = parseInt(await readLine());

    const battlementsEnabled = w >= 5;

    for (let i = 0; i < h; i++) {
        const firstRow = i === 0;
        const fullRow = h % 2 === 0 ? i % 2 === 1 : i % 2 === 0;

        let padding = 0;

        // --- výpočet odsazení této řady cihel zleva
        if (firstRow) {
            if (battlementsEnabled) {
                padding = fullRow ? BRICK_WIDTH - 1 : Math.floor(BRICK_WIDTH / 2);
            } else if (!fullRow) {
                padding = Math.floor(BRICK_WIDTH / 2);
            }
        } else if (i === 1 && battlementsEnabled && !fullRow) {
            padding = Math.floor(BRICK_WIDTH / 2);
        }
        // ---

        // výpis vypočteného odsazení
        for (let j = 0; j < padding; j++) {
            process.stdout.write(" ");
        }

        // --- výpis vrchních hran cihel
        if (battlementsEnabled && firstRow) {
            const bricksCount = Math.floor((fullRow ? w - 1 : w) / 2);

            // řada cihel je přerušovaná
            for (let j = 0; j < bricksCount; j++) {
                for (let k = 0; k < BRICK_WIDTH; k++) {
                    process.stdout.write("#");
                }

                if (j !== bricksCount - 1) {
                    for (let k = 0; k < BRICK_WIDTH - 2; k++) {
                        process.stdout.write(" ");
                    }
                }
            }
        } else {
            // řada cihel je plná
            for (let j = 0;
                 j < (!fullRow && (firstRow || (i === 1 && battlementsEnabled)) ? w - 1 : w) * (BRICK_WIDTH - 1) + 1;
                 j++) {
                process.stdout.write("#");
            }
        }
        // ---

        console.log();

        // --- výpis bočních hran cihel
        for (let j = 0; j < BRICK_HEIGHT - 2; j++) {
            padding = 0;

            if (battlementsEnabled && firstRow) {
                padding = fullRow ? BRICK_WIDTH - 1 : Math.floor(BRICK_WIDTH / 2);
            } else if (!fullRow) {
                padding = Math.floor(BRICK_WIDTH / 2);
            }

            for (let k = 0; k < padding; k++) {
                process.stdout.write(" ");
            }

            let linesCount;

            if (battlementsEnabled && firstRow) {
                // zajištění, že poslední cihla cimbuří nebude přepadávat
                linesCount = fullRow ? w % 2 === 0 ? w - 3 : w - 2 : w % 2 === 0 ? w - 1 : w - 2;
            } else {
                linesCount = fullRow ? w : w - 1;
            }

            // výpis první hrany
            process.stdout.write("#");
            // výpis zbylých hran
            for (let k = 0; k < linesCount; k++) {
                for (let l = 0; l < BRICK_WIDTH - 2; l++) {
                    process.stdout.write(" ");
                }

                process.stdout.write("#");
            }

            console.log();
        }
        // ---
    }

    // výpis spodních hran cihel
    for (let j = 0; j < w * (BRICK_WIDTH - 1) + 1; j++) {
        process.stdout.write("#");
    }

    console.log();
}
