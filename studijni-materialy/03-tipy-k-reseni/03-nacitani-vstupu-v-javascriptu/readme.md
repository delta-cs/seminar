# Načítání vstupu v JavaScriptu

Přijít na vhodný způsob, jak načítat standardní vstup (který je popsán
v [této kapitole](/studijni-materialy/02-standardni-vstup-a-vystup)) v JavaScriptu, není nic snadného. Nabízí se mnoho
možností, jenže většina je pro řešení úloh Pardubického hackera buď nepoužitelná nebo nepohodlná.

Nabízíme a doporučujeme proto využít tento kus kódu, který lze vložit na začátek každého vašeho řešení úlohy:

```jsx
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

main().then();

async function main() {
    // váš kód, např.
    const input = await readLine();
    console.log(input);
}
```

Následně můžete začít psát svůj program do funkce `main`. Uvnitř ní je možné používat funkci `readLine`, která vrátí
jeden řádek ze stdin. Před jejím voláním musí vždy stát `await`. Kdyby přišlo vhod použít `readLine` i v jiné funkci
než `main`, musí být také označena jako `async` (asynchronní) a při volání být také použito `await`.
