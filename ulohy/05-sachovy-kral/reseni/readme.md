# Šachový král – řešení

Pomocí porovnání hodnoty dvou prvních řádků vstupu uložíme do dvou logických proměnných

- zda je král v šachu a
- zda se může pohnout.

Následuje sekvence podmínek:

- Může se král pohnout?
    - Ano:
        - Je v šachu?
            - Ano: šach ale ne mat – odpověď: `check`.
            - Ne: není nic zvláštního, hra pokračuje – odpověď: `continuing`.
    - Ne:
        - Je v šachu?
            - Ano: mat – nastavíme odpověď na `check`.
            - Ne: pat – nastavíme odpověď na `stale`.
        - V každém případě připojíme k odpovědi `mate` (pro `checkmate` i `stalemate`).

Nakonec jen vypíšeme uloženou odpověď.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
