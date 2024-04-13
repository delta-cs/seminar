# Syntaxe množin v Javě

Java nabízí implementaci množiny s názvem `HashSet`. Tu je nutné do kódu importovat:

```markdown
import java.util.HashSet;
```

## Vytvoření

Datový typ, který má množina ukládat, se uvádí do špičatých závorek. Vytvoření prázdné množiny:

```java
HashSet<String> words = new HashSet<>();
```

## Vložení prvku: `add`

```java
words.add("book");
```

## Vyhledání prvku: `contains`

```java
if (words.contains("book")) {
    // prvek nalezen
}
```

## Odstranění prvku: `remove`

```java
words.remove("book");
```

## Délka: `size`

```java
int wordsCount = words.size();
```
