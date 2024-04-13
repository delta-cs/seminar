# Syntaxe asociativních polí v C++

C++ nabízí implementaci asociativního pole s názvem `map`. Tu je nutné do kódu naimportovat:

```cpp
#include <map>
```

## Vytvoření

Datové typy, které má asociativní pole ukládat, se uvádí do špičatých závorek – nejrpve klíče, poté hodnoty. Vytvoření
prázdného asociativního pole:

```cpp
std::map<std::string, int> wordFrequencies;
```

## Vložení prvku: `insert` nebo `[]`

```cpp
wordFrequencies.insert(std::make_pair("book", 10));
wordFrequencies["magazine"] = 20;
```

## Změna hodnoty: `[]`

```cpp
wordFrequencies["book"] = 15;
```

## Vyhledání klíče: `find`

```cpp
if (wordFrequencies.find("book") != wordFrequencies.end()) {
    // klíč nalezen
}
```

## Vyhledání hodnoty: `for`

```cpp
for (const auto& pair : wordFrequencies) {
    if (pair.second == 10) {
        // hodnota nalezena
    }
}
```

## Odstranění prvku: `erase`

```cpp
wordFrequencies.erase("book");
```

## Délka: `size`

```cpp
int wordsCount = wordFrequencies.size();
```
