# Brigády – řešení

Nejprve se načte počet měsíců a prázdný řádek. Poté se vytvoří nové pole pro počty odpracovaných hodin v jednotlivých
měsících. Tedy, prvek na indexu 0 bude ukládat počet hodin za první měsíc. Toto pole se v následujícím `for` cyklu
naplní hodnotami ze vstupu.

Pak se přečte prázdný řádek a vytvoří se nová proměnná pro celkový Janin výdělek. V následujícím `for` cyklu (který opět
běží tolikrát, kolik je měsíců) se vždy do proměnné načte hodinový plat za daný měsíc. Poté se v cyklu využije
proměnné `i`, pomocí níž se přistoupí k indexu v onom načteném poli ukládajícím počty hodin. Na indexu `i` je uložen
počet hodin odpovídající danému měsící, pro který byl v aktuálním průchodu načten hodinový plat. Tyto dvě hodnoty (počet
hodin z pole a právě načtený hodinový plat) se vynásobí – tím se spočte celková výplata za daný měsíc – a tato hodnota
se přičte do celkového součtu. Po skončení cyklu se součet vypíše.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
