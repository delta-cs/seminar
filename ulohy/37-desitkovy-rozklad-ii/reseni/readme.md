# Desítkový rozklad II – řešení

Načte se číslo, ale pracuje se s ním jako s řetězcem. Zjistí se index desetinné tečky. Když ji číslo nemá, je tento
index nastaven na pozici za koncem čísla.

Následuje první průchod řetězcem od nultého indexu po tečku. Načte se číslice na tomto indexu a když je nula, přeskakuje
se. Jinak se vypíše spolu s jedničkou a za ní takovým počtem nul, kolik indexů zbývá do tečky.

Druhý průchod má stejný princip, jenom se pohybuje v indexech od tečky po konec řetězce. Místo jedničky se vypisuje nula
s tečkou a za ní tolik nul, kolik indexů uběhlo od tečky. Jednička je přidána na konci.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
