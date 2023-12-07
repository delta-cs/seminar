# Kosodélník

<img src="cover.webp" height="200" alt="ilustrace"/>

Na vstupu programu budou celá čísla týkající se kosodélníku:

- strana a,
- výška na stranu a.

Obě čísla budou vždy mezi 2 a 1000.

Úkolem je vykreslit kosodélník (jeho strany, bez výplně) pomocí znaků křížku (`#`). Jednotka zadaných čísel je právě jeden tento znak. Vodorovná úsečka o délce 4 by tedy vypadala takto:

```
####
```

A svislá o délce 4:

```
#
#
#
#
```

Sklon strany b je vždy takový, že znak je posunut o jednu mezeru doprava oproti znaku na řádku pod ním:

```
   #
  #
 #
#
```

## Příklad #1

### Vstup

```
10
5
```

### Výstup

```
    ##########
   #        #
  #        #
 #        #
##########
```

## Příklad #2

### Vstup

```
2
4
```

### Výstup

```
   ##
  ##
 ##
##
```
