# Syntaxe asociativních polí v JavaScriptu

JavaScript nabízí implementaci asociativního pole s názvem `Map`.

## Vytvoření

```jsx
const wordFrequencies = new Map();
```

## Vložení prvku: `set`

```jsx
wordFrequencies.set("book", 10);
```

## Změna hodnoty: `set`

```jsx
wordFrequencies.set("book", 15);
```

## Vyhledání klíče: `has`

```jsx
if (wordFrequencies.has("book")) {
    // klíč nalezen
}
```

## Vyhledání hodnoty: `includes`

```jsx
if (wordFrequencies.values().includes(10)) {
    // hodnota nalezena
}
```

## Odstranění prvku: `delete`

```jsx
wordFrequencies.delete("book");
```

## Délka: `size`

```jsx
const wordsCount = wordFrequencies.size;
```
