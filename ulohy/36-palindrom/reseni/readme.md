# Palindrom – řešení

Protože velikosti písmen nehrají roli, vstupní text je rovnou převeden na malá písmena.

Poté, je-li jazykem čeština, nahradí se v textu všechna `ch` hvězdičkou (ale mohl by být použit jakýkoli znak), aby při
čtení zleva i zprava byla vyhodnocena jako totožné písmeno.

Dalším krokem je odstranění (nahrazení prázdným řetězcem) všech mezer, jelikož ty palindrom nijak neovlivní. Pozor,
tento krok lze však provést až po nahrazení všech `ch`, jinak by totiž mohlo dojít ke spojení `c` na konci jednoho a `h`
na začátku dalšího slova.

Následuje samotná kontrola palindromu. Zprvu je předpokládáno, že slovo palindromem je. Pak jej `for` cyklus projde tak,
že v každém kroku přečtě `i`-té písmeno od začátku a od konce. Nerovnají-li se, nejde o palindrom a cyklus může skončit.
Když celý cyklus projde do konce, slovo je palindromické.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
