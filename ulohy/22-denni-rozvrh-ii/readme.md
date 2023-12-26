# Denní rozvrh II

<img src="cover.webp" height="200" alt="ilustrace"/>

Tato úloha navazuje na říjnovou úlohu
[Denní rozvrh](https://github.com/delta-cs/seminar/tree/main/ulohy/06-denni-rozvrh).

Na vstupu programu bude

- celé číslo `n` (od 0 do 1 440),
- prázdný řádek,
- `n` činností, každá na šesti řádcích:
    - název činnosti,
    - hodiny času, kdy tato činnost začíná,
    - minuty času, kdy tato činnost začíná,
    - hodiny času, kdy tato činnost končí,
    - minuty času, kdy tato činnost končí,
    - prázdný řádek,
- nynější čas, na dvou řádcích:
    - hodiny,
    - minuty.

Hodiny budou čísla od 0 do 23, minuty od 0 do 59. Hodiny i minuty budou čísla celá. Činnosti budou seřazeny vzestupně
podle času, kdy začínají (od 0:00 do 23:59). Nebudou se překrývat, ale jedna činnost může být v rozvrhu ve více časech.
Názvy činností budou jednoslovné.

Pozn.: hodiny a minuty se neformátují na dvě cifry. Např. 6:00 by tedy bylo

```
6
0
```

Úkolem je vypsat, jaká činnost se v aktuálním čase podle rozvrhu provádí. V případě, že daný čas nespadá do žádné
činnosti, vypíše program`none`.

## Příklad #1

### Vstup

```
3

programming
8
0
8
15

breakfast
8
30
9
14

programming
9
15
12
44

9
10
```

### Výstup

```
breakfast
```

### Vysvětlení

V rozvrhu jsou činnosti:

| od (včetně) | do (včetně) | činnost     |
|-------------|-------------|-------------|
| 8:00        | 8:15        | programming |
| 8:30        | 9:14        | breakfast   |
| 9:15        | 12:44       | programming |

V zadaném aktuálním čase 9:10 je podle rozvrhu `breakfast`.

## Příklad #2

### Vstup

```
2

reading
19
35
20
59

sleep
21
0
5
59

6
0
```

### Výstup

```
none
```

### Vysvětlení

V rozvrhu jsou činnosti:

| od (včetně) | do (včetně) | činnost |
|-------------|-------------|---------|
| 19:35       | 20:59       | reading |
| 21:00       | 5:59        | sleep   |

Zadanému aktuálnímu času 6:00 neodpovídá v rozvrhu žádná činnost.

---

- [řešení](reseni)
- [testy](testy)
