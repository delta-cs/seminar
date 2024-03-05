# Robožába

<img src="cover.webp" height="200" alt="ilustrace"/>

Robotická žába se musí několika skoky dostat na určité místo.

Na vstupu programu bude (na samostatných řádcích)

- vzdálenost, kterou má žába urazit `l`, v centimetrech (celé číslo od 1 do 100 000),
- prázdný řádek,
- počet možných skoků, které má žába k dispozici `j` (celé číslo od 1 do 100),
- prázdný řádek,
- `j` řádků, na každém celé číslo znamenající délku jednoho možného skoku v centimetrech.

Ve výčtu skoků nebudou duplicitní délky.

Úkolem je vypsat jedno celé číslo: kolika možnými různými způsoby se může žába dostat ze startu (0 centimetrů) do
vzdálenosti `l` centimetrů s použitím pouze uvedené sady skoků. Žába se musí dostat přesně na dané místo – nesmí jej
přeskočit. Jedna délka skoku může být na cestě použita vícekrát. Žába dokáže skákat pouze dopředu – neumí se vracet.

Pozn.: Při řešení této úlohy je nutné brát v úvahu také dobu, za kterou je váš algoritmus schopen ji vyřešit. Dá se
napsat program, který úlohu sice spolehlivě řeší, ale na větších vstupech mu to trvá velmi dlouho (třeba i roky).
Pokud si s takovými vstupy váš program neporadí, ale bude fungovat na menších, obdržíte alespoň částečný počet bodů.

---

Pozor: Na výsledek (počet možných způsobů) se nemusí stačit datový typ `int`. V JavaScriptu a Pythonu se tím není třeba
zabývat, ale v C, C# a Javě je nutné použít `long` a v C++ `int64_t`.

---

## Příklad #1

### Vstup

```
5

2

1
3
```

### Výstup

```
4
```

### Vysvětlení

Žába musí překonat vzdálenost 5 centimetrů. Má k tomu k dispozici 2 různé skoky:

- o 1 centimetr a
- o 3 centimetry.

Různé způsoby, jak toho dosáhnout, jsou dohromady 4 (čísla značí vzdálenosti od startu):

- 0 → 1 → 2 → 3 → 4 → 5,
- 0 → 1 → 2 → 5,
- 0 → 1 → 4 → 5,
- 0 → 3 → 4 → 5.

Proto bylo vypsáno `4`.

## Příklad #2

### Vstup

```
10

4

1
4
2
5
```

### Výstup

```
214
```

## Příklad #3

### Vstup

```
20

4

7
15
21
11
```

### Výstup

```
0
```

### Vysvětlení

Ze zadané sady délek skoků nelze poskládat žádnou kombinaci, která by skončila na kýžených 20 centimetrech. Jinými
slovy, způsobů, jak tuto vzdálenost překonat, je `0`.

---

- [řešení](reseni)
- [testy](testy)
