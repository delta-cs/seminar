# Přijímací řízení

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu bude (na samostatných řádcích)

- počet uchazečů `n`,
- prázdný řádek,
- `n` uchazečů, každý na dvou řádcích:
  - jméno (vždy jednoslovné),
  - dosažené skóre (desetinné číslo od 0 do 1 000),
  - prázdný řádek.

Přijati jsou pouze uchazeči, kteří mají skóre vyšší nebo rovno aritmetickému průměru všech uchazečů.

Úkolem je vypsat jména přijatých uchazečů, a to v pořadí, v jakém přišla na vstup.

## Příklad #1

### Vstup

```
4

Abraham
7

Isaac
7.6

Esau
5.6

Jacob
8.2
```

### Výstup

```
Isaac
Jacob
```

<div style="page-break-after: always;"></div>

### Vysvětlení

Průměrné skóre je 7,1 a tuto hranici překonali Isaac a Jacob. Isaac byl na vstupu uveden výše, proto je vypsán první.

## Příklad #2

### Vstup

```
3

Moses
15.5

Aron
11

Joshua
13.25
```

### Výstup

```
Moses
Joshua
```

---

- [řešení](reseni)
- [testy](testy)
