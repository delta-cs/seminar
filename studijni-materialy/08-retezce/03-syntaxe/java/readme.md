# Syntaxe řetězců v Javě

Některé funkce mají více různých parametrů, které mění jejich chování. Dohledání v dokumentaci či různých návodech
necháme na vás. Funkcím, které v parametru přijímají další řetězec, lze předat i samotný jeden znak.

## Indexace

```java
String greeting = "Hello, world!";

// výsledek: 'l'
char thirdLetter = greeting.charAt(2);
```

## Délka: `length`

```java
String greeting = "Hello, world!";

// výsledek: 13
int length = greeting.length();
```

## Procházení cyklem

```java
String greeting = "Hello, world!";

// výstup: "!dlrow ,olleH"
for(
int i = greeting.length() - 1;
i >=0;i--){
        System.out.

println(greeting.charAt(i));
        }
```

## Porovnání: `equals`

Nelze použít `==`.

```java
String greeting = "Hello, world!";
// výsledek: true
bool equals = "Hello, world!".equals(greeting);

String greeting2 = "Hello, world!";
// výsledek: true
bool equals = greeting.equals(greeting2);
```

## Načtení standardního vstupu

```java
Scanner scanner = new Scanner(System.in);
String input = scanner.nextLine();
```

`Scanner` nabízí několik různých funkcí pro načítání různých typů dat. Doporučujeme si jejich výčet dohledat.

## Vypsání na standardní výstup

```java
// bez zalomení řádku
System.out.print("Hello, world!");

// se zalomením řádku na konci
System.out.

println("Hello, world!");
```

## Převod velikosti písmen: `toLowerCase` a `toUpperCase`

```java
String original = "Dear mister Lewis";

// výsledek: "dear mister lewis"
String lowercase = original.toLowerCase();
// výsledek: "DEAR MISTER LEWIS"
String uppercase = original.toUpperCase();
```

## Ořezání bílých znaků: `trim`

```java
String original = " Hello, world!  ";

// výsledek: "Hello, world!"
String trimmed = original.trim();
```

## Spojování řetězců: `+`

```java
String author = "C. S. Lewis";
String book = "The Chronicles of Narnia";

// výsledek: "C. S. Lewis: The Chronicles of Narnia"
String title = author + ": " + book;
```

## Podřetězec: `substring`

Přijme-li funkce jen jeden parametr, získá se podřetězec od tohoto indexu až do konce. Přijme-li dva, získá se
podřetězec od prvního až po druhý index, vyjma.

```java
String original = "C. S. Lewis: The Chronicles of Narnia";

// výsledek: "The Chronicles of Narnia"
String book = original.substring(13);

// výsledek: "Lewis"
String lastName = original.substring(6, 11);
```

## Rozdělení řetězce: `split`

```java
String original = "C. S. Lewis";

// výsledek: ["C", "S", "Lewis"]
String[] split = original.split(". ");
```

## Hledání podřetězce: `indexOf`

```java
String quote = "Remember the signs and believe the signs.";

// výsledek: 13
int firstResultIndex = quote.indexOf("signs");
```

## Nahrazení podřetězce jiným: `replace`

```java
String title = "The Chronicles of the Rings";

// výsledek: "The Lord of the Rings"
String correct = title.replace("Chronicles", "Lord");
```

## Zřetězení prvků pole: `String.join()`

```java
String[] titleParts = new String[3];
titleParts[0]="C";
titleParts[1]="S";
titleParts[2]="Lewis";

// výsledek: "C. S. Lewis"
String joined = String.join(". ", titleParts);
```
