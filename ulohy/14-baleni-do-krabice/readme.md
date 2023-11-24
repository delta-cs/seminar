# Balení do krabice

<img src="cover.webp" height="200" alt="ilustrace"/>

***Tato úloha obsahuje vypisování desetinných čísel. Pro správné vyhodnocení systémem je nutné tato čísla vypisovat bez
jakýchkoli přebytečných koncových nul. Jak to zajistit naleznete v šestém bodě
[technických pravidel](https://github.com/delta-cs/seminar/tree/main/studijni-materialy/03-tipy-k-reseni/01-technicka-pravidla).***

Na dopravním pásu přijíždí různé předměty směrem k robotické ruce, která je skládá do krabice.

Zpočátku je krabice prázdná a ruka do ní začne vkládat věci jednu po druhé, dokud je v ní místo. Ruka vždy uchopí
nejbližší předmět na páse. Poté už ho nemůže odložit, protože pás se mezitím posune. Pokud se do krabice věc ještě
vejde, vloží ji dovnitř.

Skládání končí ve chvíli, kdy buď nezbývají na páse žádné další předměty, anebo se věc, kterou ruka právě drží, do
krabice nevejde. Poté je krabice zavřena a zalepena.

Na vstupu programu bude

- řádek s objemem krabice,
- prázdný řádek,
- předem neznámý počet (od 0 do 10 000) řádků, na každém číslo. Každé číslo znamená objem jednoho předmětu na páse,
- řádek s `-1`, který označuje konec vstupu.

Objemy jsou kladná desetinná čísla do 10 000 a jednotkou je litr.

Předměty jsou uvedeny v pořadí, v jakém jsou položeny na páse, tedy tak, jak je ruka bude postupně brát.

Úkolem je vypsat celkový objem všech věcí, které se vejdou do krabice, než je zalepena. Program je určen k naplnění
pouze jedné krabice, ne více krabic. Nemusí tedy vždy načítat všechny předměty na vstupu.

## Příklad #1

### Vstup

```
6

1.5
2.5
1
3
1.5
-1
```

### Výstup

```
5
```

### Vysvětlení

Krabice má objem 6 litrů. Ruka do ní vloží předměty s objemy 1.5, 2.5 a 1 l. Potom uchopí 3litrovou věc, která se do
krabice již nevejde, a tak je zalepena. Celkový objem věcí vevnitř je tedy 5 (1.5 + 2.5 + 1) litry.


## Příklad #2

### Vstup

```
10.5

1.25
2
3.25
1
-1
```

### Výstup

```
7.5
```

### Vysvětlení

Do krabice se vejdou všechny předměty. Pak přijde `-1` – konec vstupu – takže je vypsán jejich součet.

## Příklad #3

### Vstup

```
4

4.5
1
1.2
1
0.4
-1
```

### Výstup

```
0
```

---

- [řešení](reseni)
- [testy](testy)
