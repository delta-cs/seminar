# Posun

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu bude

- celé číslo `s` (-10 000 až 10 000) – posun,
- celé číslo `n` (0 až 10 000),
- prázdný řádek,
- `n` celých čísel (-10 000 až 10 000).

Úkolem je posunout čísla o `s` pozic. Např. při `s` = 2 se 1. číslo posune na 3. pozici, 2. číslo na 4. pozici a tak
dále. Při záporném posunu se čísla posunou na druhou stranu („zpět“). Čísla, která by na konci „přetekla“, budou
přesunuta na začátek (nebo na konec při záporném posunu). Seznam se tedy zarotuje. Pokud je posun vysoký, mohou se čísla
takto přesouvat i několikrát. Výstupem programu budou čísla v tomto novém pořadí.

## Příklad #1

### Vstup

```
2
5

1
2
3
4
5
```

### Výstup

```
4
5
1
2
3
```

### Vysvětlení

Číslo 1 se posunulo z 1. pozice o 2, tedy na 3. pozici, 2 se posunulo z 2. na 4. pozici a 3 z 3. na 5. pozici. Čísla 4 a
5 by po posunutí „přetekla“, a tak byla přesunuta na začátek (1. a 2. pozici).

## Příklad #2

### Vstup

```
-4
5

6
8
3
7
2
```

### Výstup

```
2
6
8
3
7
```

### Vysvětlení

Posun je záporný, a čísla se tak zarotovala v opačném směru.

## Příklad #3

### Vstup

```
40
7

6
7
9
3
1
2
5
```

### Výstup

```
9
3
1
2
5
6
7
```

### Vysvětlení

Čísel je 7 a posouvají se o 40 pozic, takže z konce na začátek „přetekla“ vícekrát.

---

- [řešení](reseni)
- [testy](testy)
