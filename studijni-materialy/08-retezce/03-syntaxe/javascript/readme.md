# Syntaxe řetězců v JavaScriptu

Některé funkce mají více různých parametrů, které mění jejich chování. Dohledání v dokumentaci či různých návodech
necháme na vás.

## Indexace

```jsx
const greeting = "Hello, world!";

// výsledek: "l"
const thirdLetter = greeting[2];
```

## Délka: `length`

```jsx
const greeting = "Hello, world!";

// výsledek: 13
const length = greeting.length;
```

## Procházení cyklem

```jsx
const greeting = "Hello, world!";

// výstup: "!dlrow ,olleH"
for (let i = greeting.length - 1; i >= 0; i--) {
    console.log(greeting[i]);
}
```

## Načtení standardního vstupu

V JavaScriptu dokáže být tato operace poněkud záludná, proto jí je věnována [celá stránka](/studijni-materialy/03-tipy-k-reseni/) v tipech k řešení.

## Vypsání na standardní výstup

```jsx
// bez zalomení řádku
process.stdout.write("Hello, world!");

// se zalomením řádku na konci
console.log("Hello, world!");
```

## Převod velikosti písmen: `toLowerCase` a `toUpperCase`

```jsx
const original = "Dear mister Lewis";

// výsledek: "dear mister lewis"
const lowercase = original.toLowerCase();
// výsledek: "DEAR MISTER LEWIS"
const uppercase = original.toUpperCase();
```

## Ořezání bílých znaků: `trim`

```jsx
const original = " Hello, world!  ";

// výsledek: "Hello, world!"
const trimmed = original.trim();
```

## Spojování: `+` nebo ``` a `${}`

```jsx
const author = "C. S. Lewis";
const book = "The Chronicles of Narnia";

// výsledek: "C. S. Lewis: The Chronicles of Narnia"
const title1 = author + ": " + book;

// stejný výsledek
const title2 = `${author}: ${book}`;
```

## Podřetězec: `substring`

Přijme-li funkce jen jeden parametr, získá se podřetězec od tohoto indexu až do konce. Přijme-li dva, získá se
podřetězec od prvního po druhý index, vyjma.

```jsx
const original = "C. S. Lewis: The Chronicles of Narnia";

// výsledek: "The Chronicles of Narnia"
const book = original.substring(13);

// výsledek: "Lewis"
const lastName = original.substring(6, 11);
```

## Rozdělení: `split`

```jsx
const original = "C. S. Lewis";

// výsledek: ["C", "S", "Lewis"]
const split = original.split(". ");
```

## Hledání podřetězce: `indexOf`

```jsx
const quote = "Remember the signs and believe the signs.";

// výsledek: 13
const firstResultIndex = quote.indexOf("signs");
```

## Nahrazení podřetězce jiným: `replace`

```jsx
const title = "The Chronicles of the Rings";

// výsledek: "The Lord of the Rings"
const correct = title.replace("Chronicles", "Lord");
```

## Zřetězení prvků pole: `join`

```jsx
const titleParts = ["C", "S", "Lewis"];

// výsledek: "C. S. Lewis"
const joined = titleParts.join(". ");
```
