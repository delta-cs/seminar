# Syntaxe množin v C#

C# nabízí implementaci množiny s názvem `HashSet`. Tu je nutné do kódu naimportovat:

```cpp
using System.Collections.Generic;
```

## Vytvoření

Datový typ, který má množina ukládat, se uvádí do špičatých závorek. Vytvoření prázdné množiny:

```csharp
HashSet<string> words = new HashSet<string>();
```

## Vložení prvku: `Add`

```csharp
words.Add("book");
```

## Vyhledání prvku: `Contains`

```csharp
if (words.Contains("book"))
{
    // prvek nalezen
}
```

## Odstranění prvku: `Remove`

```csharp
words.Remove("book");
```

## Délka: `Count`

```csharp
int wordsCount = words.Count;
```
