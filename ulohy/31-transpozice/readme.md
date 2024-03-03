# Transpozice

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu bude (na samostatných řádcích)

- šířka tabulky `w`,
- výška tabulky `h`,
- prázdný řádek,
- `w` × `h` řádků, na každém jedna buňka tabulky – jeden znak.

Rozměry tabulky budou celá čísla od 0 do 10 000. Znaky v buňkách nebudou mezery ani jiné bílé znaky.

Buňky jsou na vstupu uvedeny v pořadí po řádcích zleva doprava. Takže prvních `w` znaků je první řádek tabulky,
druhých `w` znaků je druhý řádek a tak dále.

Úkolem je tabulku takzvaně transponovat. To znamená vyměnit její řádky a sloupce. První řádek původní tabulky bude tedy
prvním sloupcem v nové tabulce. Druhý řádek bude potom druhý sloupec a tak dále. Totéž se dá říci i naopak: první
sloupec staré tabulky bude první řádek té nové a tak dále.

<div style="page-break-after: always;"></div>

## Příklad

### Vstup

```
5
4

.
O
.
.
.
.
O
.
.
.
O
X
O
O
O
.
O
.
.
.
```

### Výstup

```
..O.
OOXO
..O.
..O.
..O.
```

### Vysvětlení

Tabulka tak, jak je uvedena na vstupu, vypadá takto:

```
.O...
.O...
OXOOO
.O...
```

Po transpozici se z řádků staly sloupce a naopak. Je tedy vidět, že např. písmena `O` byla na druhém řádku a třetím
sloupci a nyní jsou na třetím řádku a druhém sloupci.

---

- [řešení](reseni)
- [testy](testy)
