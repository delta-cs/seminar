# Syntaxe asociativních polí v C#

C# nabízí implementaci asociativního pole s názvem `Dictionary`. Tu je nutné do kódu naimportovat:

```cpp
using System.Collections.Generic;
```

## Vytvoření

Datové typy, které má asociativní pole ukládat, se uvádí do špičatých závorek – nejrpve klíče, poté hodnoty. Vytvoření
prázdného asociativního pole:

```csharp
Dictionary<string, int> wordFrequencies = new Dictionary<string, int>();
```

## Vložení prvku: `Add` nebo `[]`

```csharp
wordFrequencies.Add("book", 10);
wordFrequencies["magazine"] = 20;
```

## Změna hodnoty: `[]`

```jsx
wordFrequencies["book"] = 15;
```

## Vyhledání klíče: `ContainsKey`

```csharp
if (wordFrequencies.ContainsKey("book"))
{
    // klíč nalezen
}
```

## Vyhledání hodnoty: `ContainsValue`

```csharp
if (wordFrequencies.ContainsValue(10))
{
    // hodnota nalezena
}
```

## Odstranění prvku: `Remove`

```csharp
wordFrequencies.Remove("book");
```

## Délka: `Count`

```csharp
int wordsCount = wordFrequencies.Count;
```
