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

const NONE_ID = 0;
const BIRD_ID = 1;
const SPEAKER_ID = 2;

main().then();

async function main() {
    const d = await readInt();
    const wireItems = [];
    for (let i = 0; i < d + 1; i++) {
        wireItems.push(0);
    }

    const p = await readInt();
    await readLine();
    for (let i = 0; i < p; i++) {
        wireItems[await readInt()] = BIRD_ID;
    }

    await readLine();

    const s = await readInt();
    await readLine();

    const speakerVolumes = [];
    const speakerTones = [];
    for (let i = 0; i < d + 1; i++) {
        speakerVolumes.push(0);
        speakerTones.push(0);
    }

    for (let i = 0; i < s; i++) {
        const position = await readInt();

        speakerVolumes[position] = await readInt();
        speakerTones[position] = await readInt();

        wireItems[position] = SPEAKER_ID;

        await readLine();
    }

    const z = await readInt();
    await readLine();
    for (let i = 0; i < z; i++) {
        const speakerPosition = await readInt();
        playSpeaker(wireItems, speakerPosition, speakerVolumes[speakerPosition], speakerTones[speakerPosition]);
    }

    printWireItems(wireItems);
}

function playSpeaker(wireItems, position, volume, tone) {
    if (volume < 1 || tone < 1) {
        return;
    }

    let leftEdge = Math.max(0, position - volume);
    for (let i = leftEdge; i < position; i++) {
        if (wireItems[i] !== BIRD_ID) {
            continue;
        }

        let newIndex = i - tone;
        if (newIndex >= 0 && wireItems[newIndex] === NONE_ID) {
            wireItems[newIndex] = wireItems[i];
        }

        wireItems[i] = NONE_ID;
    }

    let rightEdge = Math.min(wireItems.length - 1, position + volume);
    for (let i = rightEdge; i > position; i--) {
        if (wireItems[i] !== BIRD_ID) {
            continue;
        }

        let newIndex = i + tone;
        if (newIndex < wireItems.length && wireItems[newIndex] === NONE_ID) {
            wireItems[newIndex] = wireItems[i];
        }

        wireItems[i] = NONE_ID;
    }
}

function printWireItems(wireItems) {
    let result = "";
    for (let i = 0; i < wireItems.length; i++) {
        let c = "-";
        switch (wireItems[i]) {
            case BIRD_ID:
                c = "O";
                break;
            case SPEAKER_ID:
                c = "|";
                break;
        }
        result += c;
    }
    console.log(result);
}

async function readInt() {
    return parseInt(await readLine());
}
