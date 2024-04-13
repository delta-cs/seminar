# Syntaxe asociativních polí v Javě

Java nabízí implementaci asociativního pole s názvem `HashMap`. Tu je nutné do kódu importovat:

```java
import java.util.HashMap;
```

## Vytvoření

Datové typy, které má asociativní pole ukládat, se uvádí do špičatých závorek – nejrpve klíče, poté hodnoty. Vytvoření prázdného asociativního pole:

```java
HashMap<String, Integer> wordFrequencies = new HashMap<>();
```

## Vložení prvku a změna hodnoty: `put`

```java
wordFrequencies.put("book", 10);
```

## Změna hodnoty: `put`

```java
wordFrequencies.put("book", 15);
```

## Vyhledání klíče: `containsKey`

```java
if (wordFrequencies.containsKey("book")) {
    // klíč nalezen
}
```

## Vyhledání hodnoty: `containsValue`

```java
if (wordFrequencies.containsValue(10)) {
    // hodnota nalezena
}
```

## Odstranění prvku: `remove`

```java
wordFrequencies.remove("book");
```

## Délka: `size`

```java
int wordsCount = wordFrequencies.size();
```
