# Barvení – řešení

Načte se šířka a výška papíru, počet obdélníků a prázdný řádek. Založí se 2D pole logických hodnot o načtených
velikostech. Výchozí hodnota na všech prvcích je `false`.

Pak začíná `for` cyklus s tolika průchody, kolik bude obdélníků. Pro každý načte souřadnice a velikosti. Na ose x se
pohybuje `for` cyklus běžící s proměnnou `col` od souřadnice obdélníku x po x + šířka obdélníku. Tato proměnná tedy
postupně projde všechny sloupce, na kterých se daný obdélník nachází. Stejným způsobem prochází zanořený `for` cyklus s
proměnnou `row` všechny řádky, na kterých se obdélník nachází. Uvnitř tohoto cyklu budou tedy k dispozici vždy dvě
souřadnice (`col` a `row`), které obdélník obsahuje. Na těchto souřadnicích se tak ve 2D poli přepne `false` na `true` –
čtvereček papíru se obarví. Pozn.: od všech hranic v cyklech pro proměnné `col` a `row` se odečítá 1, protože souřadnice
na vstupu jsou číslovány od 1, narozdíl od indexů.

Nakonec se celé 2D pole vypíše na výstup. Důležitou roli hraje pořadí cyklů: ten na řádky musí být vnější a do něj
zanořen na sloupce, protože na výstup programu se také vypisuje po řádcích. Při opačném pořadí by se papír vykreslil
otočený.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
