# Syntaxe množin v JavaScriptu

JavaScript nabízí implementaci množiny s názvem `Set`.

## Vytvoření

```jsx
const words = new Set();
```

## Vložení prvku: `add`

```jsx
words.add("book");
```

## Vyhledání prvku: `has`

```jsx
if (words.has("book")) {
    // prvek nalezen
}
```

## Odstranění prvku: `delete`

```jsx
words.delete("book");
```

## Délka: `size`

```jsx
const wordsCount = words.size;
```
