# Zrcadlo – řešení

Načtou se rozměry papírku a směru, jakým je k zrcadlu přiložen. V případě rozměrů menších než 1 lze program ukončit.
Poté se založí 2D pole s těmito rozměry. Dva vnořené `for` cykly pak toto pole naplní znaky ze vstupu.

Následným `switch`em se podle směru provede buď převrácení podle pravé boční nebo podle spodní hrany. V obou případech
se provedou dva vnořené `for` cykly, které projdou papírek. V prvním případě se znaky vypisují ve směru od posledního
sloupce k prvnímu, v druhém případě od posledního řádku k prvnímu. V obou případech se po výpisu jednoho řádku provede
zalomení nového řádku.

Výsledkem je tak vypsání znaků, které odpovídá odrazu papírku v zrcadle.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
