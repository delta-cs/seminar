# Pozpátku – řešení

Zprvu se načte počet čísel `n`. Poté se vytvoří nové pole. V C#, C++ a Javě je mu při vytvoření nastavena délka na `n`.

Následuje `for` cyklus běžící `n`-krát, který v každém průchodu přidá načtené číslo na další index v poli.

Nakonec přichází znovu `for` cyklus s `n` průchody, ale tentokrát začíná `i` na `n` - 1 a klesá až do nuly. Tím, že se v
každém průchodu vypíše prvek v poli na indexu `i`, dojde ve výsledku k výpisu pole od konce.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
