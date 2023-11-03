# Roboti a bedny

<img src="cover.webp" height="200" alt="ilustrace"/>

Roboti nosí bedny z kamionu do skladu. Vstupem programu bude (na samostatných řádcích)

- počet beden `b`, které byly přeneseny,
- počet robotů `r`, kteří bedny nosili,
- doba `t`, kolik minut trvalo `r` robotům přenést `b` beden,
- číslice `c` – buď 1 nebo 2.

`c` určuje, jaká informace nás nyní zajímá:

- Když `c`= 1, program dostane na vstupu ještě jednu hodnotu: počet robotů `r2`. Úkolem je vypsat celé číslo – **kolik
  beden by `r2` robotů stihlo přenést za původní dobu `t`**.
- Když `c`= 2, program dostane na vstupu ještě jednu hodnotu: dobu `t2` minut. Úkolem je vypsat celé číslo – **kolik
  nejméně robotů by muselo nosit `b` beden, aby to stihli v době `t2`**.

Počty beden a robotů jsou celá čísla, doby jsou desetinná. `b`, `r`, `t` a `t2` jsou vždy kladná. `r2` je nezáporné.
Všechny vstupy jsou čísla do 10 000.

## Příklad #1

### Vstup

```
10
5
40
1
10
```

### Výstup

```
20
```

### Vysvětlení

5 robotů nosilo 10 beden po dobu 40 minut.

Další číslicí (`c`) je 1, dostáváme tedy počet robotů (`r2`) a počítáme, **kolik beden by tento počet robotů** (10) **za
stejných 40 minut stihl přenést**.

Výsledek je, že 10 robotů stihne přenést 20 beden.

## Příklad #2

### Vstup

```
100
12
3.75
2
8
```

### Výstup

```
6
```

### Vysvětlení

12 robotů nosilo 100 beden po dobu 3,75 minuty.

Další číslicí (`c`) je 2, dostáváme tedy dobu (`t2`) a počítáme, **kolik nejméně robotů by muselo nosit 100 beden, aby
jim to trvalo tuto dobu** (8 minut).

Výsledek je, že robotů by muselo být alespoň 6.
