# Roboti a bedny – řešení

První čtyři řádky vstupu se načtou do proměnných. Ve větvi `switch`e (kterou určuje `c`) se poté načítá poslední proměnná a volá se příslušná funkce.

V první variantě (`c` je 1) se volá `solveBoxes`. Ta vypočítává poměr `r2` ku `r`. Bude-li větší než 1, `r2` je větší než `r` a naopak. Určuje, kolikrát větší (popř. menší) je nový počet robotů než ten původní. A tudíž kolikrát více (popř. méně) beden bude tento nový počet schopen přenést. Títmo poměrem se násobí původní počet přenesených beden a výsledkem je nový počet beden, který stihne `r2` robotů přenést.

Vyjde-li desetinné číslo, musí se zaokrouhlit dolů na celé, protože přenést např. 3.7 bedny nejde – ve skutečnosti by se stihly přenést 3. Zaokrouhlení se v C, C++, C# a Javě stane automaticky, protože jde o dělení dvou celých čísel – výsledek bude také celý. V JavaScriptu se zaokrouhluje pomocí `Math.floor` a v Pythonu pomocí `//`.

Tím, že oba počty robotů mají na nošení vyhrazenou stejnou dobu `t`, nemá vlastně na výsledek vůbec vliv – ve výpočtu se neobjevuje a funkce ji tak ani nepřijímá v parametru.

Ve variantě, kdy `c` je 2, se volá `solveRobots`. Ta tentokrát vypočítává poměr dob, ovšem v opačném pořadí – `t` ku `t2`. Bude-li větší než 1, znamená to, že původní doba je delší než nová a nový počet robotů bude muset být větší, a to konkrétně tolikrát, jaký je vypočítaný poměr. Proto stačí poměrem vynásobit původní počet robotů.

Vyjde-li desetinné číslo, je ho tentokrát nutné zaokrouhlit nahoru – když je totiž potřeba přinejmenším např. 3.2 robotů, ve skutečnosti už musí být 4.

V této variantě zase nehraje roli počet přenesených beden `b`, protože těch je vždy potřeba přenést stejně.

Výsledek vrácený ze zvolené funkce se uloží do předpřipravené proměnné, která se nakonec vypíše.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
