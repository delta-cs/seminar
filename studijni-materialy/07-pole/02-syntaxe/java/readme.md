# Syntaxe polí v Javě
## Vytvoření

Pro vytvoření pole prvků nějakého datového typu stačí za daný datový typ dopsat hranaté závorky. Následuje (jako u jiných proměnných) název pole a poté přiřazení hodnoty pomocí klíčového slova `new` nasledovaného znovu napsaným typem pole. Tentokrát se do hranatých závorek uvede délka pole – počet ukládaných prvků. Následují ukázky vytvoření proměnné typu pole s názvem `numbers` ukládající celá čísla.

Vytvoření pole s délkou 3 prvků:

```java
int[] numbers = new int[3];
```

Vytvoření pole s délkou podle proměnné:

```java
int n = 5;

int[] numbers = new int[n];
```

Vytvoření 2D pole s rozměry 4 × 3:

```java
int[][] numbers = new int[4][3];
```

## Přístup k prvku

K nastavení nebo přečtení hodnoty konkrétního prvku na daném indexu se využívají hranaté závorky za názvem pole. Mezi ně patří index tohoto prvku. Příklad:

```java
int[] numbers = new int[3];

numbers[0] = 5;
numbers[1] = 8;
numbers[2] = 3;

System.out.println(numbers[1]);

numbers[1] = 6;

System.out.println(numbers[1]);
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

Pole v Javě mají pevnou délku, která se musí určit při vytvoření a pak nelze změnit. Proto do polí nelze přidávat nové prvky. Tuto možnost nabízí takzvaný `ArrayList`. Pro jeho použití je za potřebí přidat na začátek souboru

```java
import java.util.ArrayList;
```

U něj se datový typ uchovávaných hodnot uvádí při vytvoření do špičatých závorek. Pozor, pro ukládání celých čísel je nutné napsat typ `Integer` místo `int`. Na konci řádku se ještě musí nacházet kulaté závorky:

```java
ArrayList<Integer> numbers = new ArrayList<>();
```

Pro přečtení prvku slouží funkce `get`, která přijímá index daného prvku. Funkce `set` nastavuje hodnotu prvku a kromě indexu přijímá ještě hodnotu, která se má nastavit. Prvek se do `ArrayList`u přidá zavoláním funkce `add` (mezi názvem `ArrayList`u a funkcí je tečka). Příklad:

```java
ArrayList<Integer> numbers = new ArrayList<>();

numbers.add(7);
numbers.add(5);

numbers.set(1, 4);

System.out.println(numbers.get(1));
```

Do prázdného `ArrayList`u jsou postupně přidány prvky

- s indexem 0 a hodnotou 7,
- s indexem 1 a hodnotou 4.

Druhý prvek je poté nastaven na hodnotu 4 a nakonec vypsán. Výstup programu:

```
4
```

## Délka

Ke zjištění aktuální délky pole slouží jeho vlastnost `length`:

```java
int[] numbers = new int[3];

int numbersCount = numbers.length;

System.out.println(numbersCount);
```

Výstup:

```
3
```

A u `ArrayList`u funkce `size`:

```java
ArrayList<Integer> numbers = new ArrayList<>();

numbers.add(7);
numbers.add(5);

int numbersCount = numbers.size();

System.out.println(numbersCount);
```

Výstup:

```
2
```