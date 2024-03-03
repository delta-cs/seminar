# Navigace skladníka

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu bude (na samostatných řádcích)

- šířka skladu `w` v metrech (celé číslo od 1 do 1000),
- délka skladu `h` v metrech (celé číslo od 1 do 1000),
- prázdný řádek
- počáteční souřadnice robota – na dvou řádcích:
    - vzdálenost od levé stěny skladu v metrech (celé číslo od 1 do `w`, včetně),
    - vzdálenost od zadní stěny skladu v metrech (celé číslo od 1 do `h`, včetně),
- prázdný řádek,
- počet sloupů `p` (celé číslo od 1 do 100 000),
- prázdný řádek,
- `p` souřadnic sloupů, každá na třech řádcích:
    - vzdálenost od levé stěny skladu v metrech (celé číslo od 1 do `w`, včetně),
    - vzdálenost od zadní stěny skladu v metrech (celé číslo od 1 do `h`, včetně),
    - prázdný řádek,
- počet krabic `b` (celé číslo od 1 do 1 000 000),
- prázdný řádek,
- `b` souřadnic krabic, každá na třech řádcích:
    - vzdálenost od levé stěny skladu v metrech (celé číslo od 1 do `w`, včetně),
    - vzdálenost od zadní stěny skladu v metrech (celé číslo od 1 do `h`, včetně),
    - prázdný řádek,
- počet příkazů `c` (celé číslo od 1 do 10 000),
- prázdný řádek
- `c` řádků, na každém z nich jeden příkaz pro robota – jedna ze tří možností:
    - otočení o 90 stupňů po směru hodinových ručiček: `R`,
    - otočení o 90 stupňů proti směru hodinových ručiček: `L`,
    - pohyb vpřed: `F`.

Na jedněch souřadnicích bude stát nejvýše jeden sloup nebo jedna krabice nebo robot.

Robot je zpočátku natočen směrem k levé stěně skladu. Příkazy vykonává v pořadí, v jakém jsou uvedeny na vstupu, a to
následovně: Při otočení (`R` nebo `L`) zůstává stát na stejném místě a pouze se otočí v daném směru. Při pohybu
vpřed (`F`) se posune o 1 metr ve směru, kterým je zrovna natočen.

Pokud se robot nachází u stěny a má se posunout směrem do ní, žádný pohyb neprovede – zůstane stát a pokračuje dalším
příkazem v pořadí. Totéž platí, má-li se robot posunout na místo, kde stojí sloup.

Když se má robot posunout na místo, kde se nachází krabice, posune ji ve směru pohybu o 1 metr dál. Je-li krabic více v
řadě, posunou se v tomto směru všechny. Ale pozor: stejně jako robot nemůže vjet do stěny nebo sloupu, není možné na
tato místa posunout ani krabici. Kdyby měl robot posunout nějakou krabici do stěny skladu nebo na místo, kde stojí
sloup, zůstane stát a pokračuje dalším příkazem.

Úkolem je vykreslit sklad z pohledu shora – levá stěna vlevo, pravá stěna vpravo, přední stěna dole, zadní stěna
nahoře – po provedení všech příkazů. Znak pro sloup je malé písmeno `o`, pro krabici křížek (`#`) a pro robota malé
písmeno `r`. Stěny skladu budou vykresleny po okrajích pomocí teček (`.`). Místa, na nichž nic nestojí budou vyplněna
mezerami.

<div style="page-break-after: always;"></div>

## Příklad

### Vstup

```
6
5

2
5

1

5
3

4

1
2

1
4

2
3

3
3

12

F
F
R
F
F
F
R
F
F
L
F
L
```

<div style="page-break-after: always;"></div>

### Výstup

```
........
.#     .
.#r    .
.  ##o .
.      .
.      .
........
```

### Vysvětlení

Sklad je 6 metrů široký a 5 metrů dlouhý. Robot se zpočátku nachází na souřadnicích [2; 5]. Ve skladu je jeden sloup na
souřadnichích [5; 3] a čtyři krabice na [1; 2], [1; 4], [2; 3] a [3; 3]. Před prvním příkazem by tedy rozložení vypadalo
takto:

```
........
.      .
.#     .
. ## o .
.#     .
. r    .
........
```

Následuje 12 příkazů. V prvním z nich se robot pohne vpřed – směrem doleva (tak je zpočátku vždy natočen). Nové
rozložení:

```
........
.      .
.#     .
. ## o .
.#     .
.r     .
........
```

Pak se má vpřed pohnout znovu, ale tentokrát je před ním stěna, a tak zůstane na místě.

Následně se otočí po směru hodinových ručiček a nově míří směrem k zadní stěně.

V dalším příkazu se pohne dopředu – nahoru – a tím posune krabici před sebou:

```
........
.      .
.#     .
.### o .
.r     .
.      .
........
```

<div style="page-break-after: always;"></div>

A pak znovu; tentokrát posune, kromě té předchozí, také krabici v řadě nad ní:

```
........
.#     .
.#     .
.r## o .
.      .
.      .
........
```

V dalším příkazu by se měl robot znovu pohnout nahoru, jenže to by musel zatlačit horní krabici za stěnu, což není
možné. Zůstává tedy stát.

Poté se otočí po směru hodinových ručiček a je natočen doprava.

V tomto směru se následně pohne a posune dvě sousední krabice:

```
........
.#     .
.#     .
. r##o .
.      .
.      .
........
```

Tentýž pohyb by měl provést i v dalším příkazu, ale sloup krabicím brání, takže se nestane nic.

Robot se pak otočí proti směru hodinových ručiček a směřuje nahoru.

Posune se vpřed, čímž se dostává do konečné pozice (která je vypsána na výstup programu).

V posledním příkazu se sice ještě otočí, to ale ve vykreslení skladu nic nezmění.
