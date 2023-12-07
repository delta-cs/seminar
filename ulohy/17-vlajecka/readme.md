# Vlaječka

<img src="cover.webp" height="200" alt="ilustrace"/>

Na displeji je potřeba vykreslit vlaječku na žerdi.

Na vstupu programu bude

- celé číslo (od 2 do 1000) `p` – délka žerdi,
- celé číslo (od 2 do 1000) `f` – šířka vlaječky,
- celé číslo (od 0 do 1000) `h` – vzdálenost vlaječky od země.

Vlaječka se vykresluje pomocí znaků křížku (`#`) a má tvar trojúhelníku, konkrétně rovnoramenného se svislou základnou.
První řádek je vždy jeden znak. Každý další řádek je oproti předchozímu o jeden znak delší nebo kratší. Číslo `f`
určuje, kolik znaků bude mít nejdelší (prostřední) řádek.

Žerď se vykresluje pomocí znaků svislítka (`|`), jeden na každém řádku. Celkový počet řádků žerdi určuje `p`. V místech,
kde vlaječka překrývá žerď, se místo svislítek vykreslí křížky. Vlaječka je zavěšena v takové výšce, že pod jejím
nejspodnějším řádkem se nachází `h` řádků žerdi.

V případě, že žerď je příliš krátká na to, aby se vlaječka dala zavěsit do kýžené výšky (nebo nelze zavěsit vůbec),
vypíše program `invalid`.

## Příklad #1

### Vstup

```
13
5
3
```

### Výstup

```
|
#
##
###
####
#####
####
###
##
#
|
|
|
```

### Vysvětlení

`f` je 5, nejdelší řádek vlaječky má tedy 5 znaků. Vlaječka je 9 řádků vysoká a pod sebou má 3 řádky žerdi. Celá žerď je
vysoká 13 řádků a tak vlaječku nahoře o jeden znak převyšuje.

## Příklad #2

### Vstup

```
5
3
0
```

### Výstup

```
#
##
###
##
#
```

### Vysvětlení

Vlaječka je vysoká stejně jako žerď, a tak ji zcela zakrývá.

## Příklad #3

### Vstup

```
6
3
2
```

### Výstup

```
invalid
```

### Vysvětlení

Vlaječka by byla vysoká 5 řádků (vizte příklad #2) a pod ní by ještě byly dva řádky žerdi – dohromady 7 řádků. Žerď má
ale jen 6, zavěšení tudíž není možné.