# Syntaxe množin v C++

C++ nabízí implementaci množiny s názvem `unordered_set`. Tu je nutné do kódu naimportovat:

```cpp
#include <unordered_set>
```

## Vytvoření

Datový typ, který má množina ukládat, se uvádí do špičatých závorek. Vytvoření prázdné množiny:

```cpp
std::unordered_set<std::string> words;
```

## Vložení prvku: `insert`

```cpp
words.insert("book");
```

## Vyhledání prvku: `find` a `end`

```cpp
if (words.find("book") != words.end()) {
    // prvek nalezen
}
```

## Odstranění prvku: `erase`

```cpp
words.erase("book");
```

## Délka: `size`

```cpp
int wordsCount = words.size();
```
