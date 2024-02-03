# Syntaxe polí v JavaScriptu

Pozn.: Pole v JS dovolují ukládat i prvky různých datových typů. Zda je ale dobré tuto skutečnost využívat je otázka. Každopádně tato možnost se stejně hodí jen vyjímečně.

## Vytvoření

Vytvoření pole se provádí pouhými hranatými závorkami:

```jsx
const numbers = [];
```

Vytvoření 2D pole s rozměry 4 × 3 naplněného nulami:

```jsx
const numbers = [];

for (let i = 0; i < w; i++) {
    numbers.push([]);
    for (let j = 0; j < h; j++) {
        numbers[i].push(0);
    }
}
```

## Přístup k prvku

K nastavení nebo přečtení hodnoty konkrétního prvku na daném indexu se využívají hranaté závorky za názvem pole. Mezi ně patří index tohoto prvku. Příklad:

```jsx
const numbers = [];

numbers[0] = 5;
numbers[1] = 8;
numbers[2] = 3;

console.log(numbers[1]);

numbers[1] = 6;

console.log(numbers[1]);
```

Nejprve je vytvořeno pole a nastaví se hodnoty na jeho indexech:

<table>
<tr><th>index</th><td>0</td><td>1</td><td>2</td></tr>
<tr><th>hodnota</th><td>5</td><td>8</td><td>3</td></tr>
</table>

Je vypsána hodnota na indexu 1, tedy 8. Následně je změněna na 6 a vypsána znovu. Výstup programu by tedy byl

```
8
6
```

V případě čtení indexu, který se v poli nenachází, je vráceno `undefined`.

## Přidání prvku

Prvek se do pole přidá zavoláním funkce `push` (mezi názvem pole a funkcí je tečka). Příklad:

```jsx
const numbers = [];

numbers.push(7);
numbers.push(4);

console.log(numbers[1]);
```

Do prázdného pole jsou postupně přidány prvky

- s indexem 0 a hodnotou 7,
- s indexem 1 a hodnotou 4.

Druhý prvek je nakonec vypsán. Výstup programu:

```
4
```

## Délka

Ke zjištění aktuální délky pole slouží vlastnost `length`:

```jsx
const numbers = [];

numbers.push(7);
numbers.push(4);

const numbersCount = numbers.length;

console.log(numbersCount);
```

Výstup:

```
2
```
