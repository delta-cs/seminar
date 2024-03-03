# Piškvorky

<img src="cover.webp" height="200" alt="ilustrace"/>

Anča s Béďou hráli piškvorky. Jsou však nepozorní a mohlo se stát, že si nevšimli, že jeden z nich již spojil (
horizontálně, vertikálně nebo diagonálně) pět svých symbolů a pokračovali ve hraní. Partie tedy možná měla podle
pravidel skončit dřív. Rozhodli se to ověřit pomocí programu.

Na vstupu bude (na samostatných řádcích)

- šířka hrací plochy `w` (celé číslo od 5 do 1000),
- výška hrací plochy `h` (celé číslo od 5 do 1000),
- počet tahů `t` (celé číslo od 0 do 10 000),
- začínající hráč (jeden znak: `A` nebo `B`),
- prázdný řádek,
- `t` tahů, každý z nich – symbol umístěný na hrací ploše – na třech řádcích:
    - souřadnice sloupce (celé číslo od 1 do `w`, včetně),
    - souřadnice řádku (celé číslo od 1 do `h`, včetně),
    - prázdný řádek.

Úkolem je určit jednu ze tří možností:

1. Došlo-li v partii k neplatnému tahu – nějaký symbol byl umístěn na políčko, které je již obsazené (kterýmkoli z
   hráčů, nejen soupeřem) – vypsat na dvou řádcích
    - `invalid` a
    - číslo neplatného tahu (číslováno od 1).
2. Zvítězil-li v partii jeden z hráčů, vypsat na dvou řádcích
    - vítěze (znak `A` nebo `B`) a
    - číslo vítězného tahu (číslováno od 1).
3. Nemá-li partie dosud vítěze, vypsat otazník (`?`).

Pokud by byl odehrán neplatný tah až po právoplatném vítězství jednoho z hráčů, nebude `invalid` vypsáno a místo toho se
vypíše možnost č. 2 – vizte příklad #2. Kdyby v partii došlo k vícero vítězným tahům, vypsáno bude pouze ten, který se
stal jako první – ty ostatní jsou neplatné.

<div style="page-break-after: always;"></div>

## Příklad #1

### Vstup

```
6
6
5
A

2
3

3
3

3
4

2
3

2
5
```

### Výstup

```
invalid
4
```

### Vysvětlení

Tah číslo 4 byl neplatný, protože Béďa umístil symbol na políčko [2; 3], kde již měla symbol Anča.

<div style="page-break-after: always;"></div>

## Příklad #2

### Vstup

```
6
6
13
B

6
1

1
1

4
1

2
2

5
2

3
3

4
3

4
4

5
4

5
5

4
5

4
4

5
6
```

<div style="page-break-after: always;"></div>

### Výstup

```
A
10
```

### Vysvětlení

Přestože byl 12. (předposlední) tah neplatný (na políčku [4; 4] již Anča symbol měla), bylo vypsáno `A`, protože Anča
zvítězila ještě předtím – v 10. tahu.

## Příklad #3

### Vstup

```
6
7
10
B

2
2

2
3

3
2

4
3

4
2

3
4

5
2

6
2

6
3

4
4
```

<div style="page-break-after: always;"></div>

### Výstup

```
?
```
