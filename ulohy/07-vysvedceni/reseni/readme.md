# Vysvědčení – řešení

Každý řádek vstupu je uložen do příslušné proměnné. Účast v soutěžích a zdravení učitelů jsou reprezentovány jako
logické hodnoty.

Úspěšné dokončení ročníku je uloženo v logické proměnné `passed`. V při splnění následné podmínky se nastaví na `true`,
jinak zůstává `false`. Podmínka zní:

- známka je menší než 5

*a zároveň* platí alespoň jedno z těchto:

- absence je menší nebo rovno 20 *nebo*
- účast na soutěžích *nebo*
- známka je 1 *a zároveň* student zdraví učitele.

Poslední tři odrážky jsou v podmínce obaleny v závorkách kvůli přednosti logických operátorů –
vizte [studijní materiály](/studijni-materialy/04-podminky/05-operatory/02-logicke-operatory). Poslední odrážka je
obalena také, ale nemusela by být, aby program fungoval stejně, protože *a zároveň* má přednost před *nebo*.

Nakonec je s využitím [ternárního operátoru](/studijni-materialy/04-podminky/07-ternarni-operator) podle
proměnné `passed` vypsán výsledek.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
