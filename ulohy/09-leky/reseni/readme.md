# Léky – řešení

Stejně jako v úloze [Denní rozvrh](/ulohy/06-denni-rozvrh) se ze vstupu vypočte celkový počet minut zadaného času. Následují definice pro začátek, konec a interval užívání (vše v minutách) jednotlivých léků. Poté je pro každý lék založena logická proměnná nastavená na `false`.

Tyto proměnné buď jsou anebo nejsou přepnuty na `true` podle splnění příslušné podmínky. Ta vypadá následovně:

- aktuální čas je větší nebo rovný času na začátku užívání (už začala doba, kdy se má lék brát)

a zároveň

- aktuální čas je menší nebo rovno času konce užívání (doba, kdy se má lék brát ještě neskončila)

a zároveň

- rozdíl aktuálního času a začátku užívání (doba uběhlá od začátku užívání po současnost) je dělitelný intervalem užívání, neboli od začátku užívání uběhl nějaký přesný (celočíselný) násobek intervalu. K tomu je využit operátor `%` (modulo) – zbytek po dělení. Např. `7 % 3` je 1, protože 1 je zbytek po dělení 7 / 3. Když se tento zbytek rovná 0, první číslo je beze zbytku dělitelné druhým.

Všechny tři body tudíž musí platit, aby si Tonda daný lék vzal.

Na konci se v zadaném pořadí podle příslušné proměnné vypíše anebo nevypíše barva každého léku.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
