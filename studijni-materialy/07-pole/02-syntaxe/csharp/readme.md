# Syntaxe polí v C#

## Vytvoření

Pro vytvoření pole prvků nějakého datového typu stačí za daný datový typ dopsat hranaté závorky. Následuje (jako u jiných proměnných) název pole a poté přiřazení hodnoty pomocí klíčového slova `new` nasledovaného znovu napsaným typem pole. Tentokrát se do hranatých závorek uvede délka pole – počet ukládaných prvků. Následují ukázky vytvoření proměnné typu pole s názvem `numbers` ukládající celá čísla.

Vytvoření pole s délkou 3 prvků:

```csharp
int[] numbers = new int[3];
```

Vytvoření pole s délkou podle proměnné:

```csharp
int n = 5;

int[] numbers = new int[n];
```

## Přístup k prvku

K nastavení nebo přečtení hodnoty konkrétního prvku na daném indexu se využívají hranaté závorky za názvem pole. Mezi ně patří index tohoto prvku. Příklad:

```csharp
int[] numbers = new int[3];

numbers[0] = 5;
numbers[1] = 8;
numbers[2] = 3;

Console.WriteLine(numbers[1]);

numbers[1] = 6;

Console.WriteLine(numbers[1]);
```

Nejprve je vytvořeno pole o velikosti 3 prvků. Poté se nastaví hodnoty na všech jeho indexech:

<table>
<tr><th>index</th><td>0</td><td>1</td><td>2</td></tr>
<tr><th>hodnota</th><td>5</td><td>8</td><td>3</td></tr>
</table>

Je vypsána hodnota na indexu 1, tedy 8. Následně je změněna na 6 a vypsána znovu. Výstup programu by tedy byl

```
8
6
```

## Přidání prvku

Pole v C# mají pevnou délku, která se musí určit při vytvoření a pak nelze změnit. Proto do polí nelze přidávat nové prvky. Tuto možnost nabízí takzvaný `List`. U něj se datový typ uchovávaných hodnot uvádí při vytvoření do špičatých závorek. Na konci řádku se ještě musí nacházet kulaté závorky:

```csharp
List<int> numbers = new List<int>();
```

Prvek se do `List`u přidá zavoláním funkce `Add` (mezi názvem `List`u a funkcí je tečka). Příklad:

```csharp
List<int> numbers = new List<int>();

numbers.Add(7);
numbers.Add(4);

Console.WriteLine(numbers[1]);
```

Do prázdného `List`u jsou postupně přidány prvky

- s indexem 0 a hodnotou 7,
- s indexem 1 a hodnotou 4.

Druhý prvek je nakonec vypsán. Výstup programu:

```
4
```

## Délka

Ke zjištění aktuální délky pole slouží jeho vlastnost `Length`:

```csharp
int[] numbers = new int[3];

int numbersCount = numbers.Length;

Console.WriteLine(numbersCount);
```

Výstup:

```
3
```

A u `List`u vlastnost `Count`:

```csharp
List<int> numbers = new List<int>();

numbers.Add(7);
numbers.Add(4);

int numbersCount = numbers.Count;

Console.WriteLine(numbersCount);
```

Výstup:

```
2
```
