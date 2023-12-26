# Kroužky – řešení

Načte se počet členů matematického kroužku a prázdný řádek. Pak se vytvoří a naplní pole jejich jmen. Taktéž se načte
pole jmen přírodopisného kroužku.

Následný `for` cyklus prochází indexy pole matematického kroužku. V něm je zanořen druhý, který zase prochází pole
přírodopisného kroužku. To znamená, že pro každé jméno z matematického kroužku se projdou všechna jména toho
přírodopisného – ve výsledku je jistota, že se porovná každé s každým: V případě, že se jméno z matematického a
přírodopisného kroužku shoduje, znamená to, že je členem obou, a tak se vypíše.

Klíčové je pořadí `for` cyklů: Jelikož je matematický ten vnější a do něj je teprve zanořen přírodopisný, dojde k
vypsání jmen v pořadí, jak je zadáno – tak, jak jsou seřazena v matematickém kroužku.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
