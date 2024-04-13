# Syntaxe řetězců v C#

Některé funkce mají více různých parametrů, které mění jejich chování. Dohledání v dokumentaci či různých návodech
necháme na vás.

Funkcím, které v parametru přijímají další řetězec, lze předat i samotný jeden znak.

## Indexace

```csharp
string greeting = "Hello, world!";

// výsledek: 'l'
char thirdLetter = greeting[2];
```

## Délka: `Length`

```csharp
string greeting = "Hello, world!";

// výsledek: 13
int length = greeting.Length;
```

## Procházení cyklem

```csharp
string greeting = "Hello, world!";

// výstup: "!dlrow ,olleH"
for (int i = greeting.Length - 1; i >= 0; i--)
{
    Console.WriteLine(greeting[i]);
}
```

## Načtení standardního vstupu

```csharp
string input = Console.ReadLine();
```

## Vypsání na standardní výstup

```csharp
// bez zalomení řádku
Console.Write("Hello, world!");

// se zalomením řádku na konci
Console.WriteLine("Hello, world!");
```

## Převod velikosti písmen: `ToLower` a `ToUpper`

```csharp
string original = "Dear mister Lewis";

// výsledek: "dear mister lewis"
string lowercase = original.ToLower();
// výsledek: "DEAR MISTER LEWIS"
string uppercase = original.ToUpper();
```

## Ořezání bílých znaků: `Trim`

```csharp
string original = " Hello, world!  ";

// výsledek: "Hello, world!"
string trimmed = stringWithWhitespace.Trim();
```

## Spojování: `+` nebo `$` a `{}`

```csharp
string author = "C. S. Lewis";
string book = "The Chronicles of Narnia";

// výsledek: "C. S. Lewis: The Chronicles of Narnia"
string title1 = author + ": " + book;

// stejný výsledek
string title2 = $"{author}: {book}";
```

## Podřetězec: `Substring`

Přijme-li funkce jen jeden parametr, získá se podřetězec od tohoto indexu až do konce. Přijme-li dva, získá se
podřetězec od prvního s délkou druhého.

```csharp
string original = "C. S. Lewis: The Chronicles of Narnia";

// výsledek: "The Chronicles of Narnia"
string book = original.Substring(13);

// výsledek: "Lewis"
string lastName = original.Substring(6, 5);
```

## Rozdělení: `Split`

```csharp
string original = "C. S. Lewis";

// výsledek: ["C", "S", "Lewis"]
string[] split = original.Split(". ");
```

## Hledání podřetězce: `IndexOf`

```csharp
string quote = "Remember the signs and believe the signs.";

// výsledek: 13
int firstResultIndex = quote.IndexOf("signs");
```

## Nahrazení podřetězce jiným: `Replace`

```csharp
string title = "The Chronicles of the Rings";

// výsledek: "The Lord of the Rings"
string correct = searchText.Replace("Chronicles", "Lord");
```

## Zřetězení prvků pole: `string.Join()`

```csharp
string[] titleParts = new string[3];
titleParts[0] = "C";
titleParts[1] = "S";
titleParts[2] = "Lewis";

// výsledek: "C. S. Lewis"
string joined = string.Join(". ", titleParts);
```
