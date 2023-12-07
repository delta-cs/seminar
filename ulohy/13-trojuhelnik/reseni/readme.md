# Trojúhelník – řešení

Do proměnné `a` se načte výška trojúhelníku.

Stěžejní myšlenka programu je následující: Bude se vypisovat `a` řádků textu. Přitom platí, že na 1. řádku se vypíše 1
znak (`#`). Na 2. řádku se vypíšou 2 znaky. A tak dále. Tedy, na kolikátém řádku se nacházíme, tolikrát je potřeba
vypsat znak. Obecně lze řádek označit číslem `i`. Aby se vykreslil celý trojúhelník, musí se vždy na `i`-tém řádku
vypsat `i` znaků.

První `for` cyklus počítá s proměnnou `i` od 0 do `a` - 1 (dokud je `i` menší než `a`). Celkově se tedy provede `a`
-krát, jednou pro každý řádek.

Do prvního cyklu je zanořen druhý, který počítá s proměnnou `j`. Zde je klíčové místo programu: `j` začíná na 0 a
zvyšuje se, až dokud se nerovná `i`. To znamená, že v každém průchodu vnějšího cyklu se ten vnitřní vykoná o 1 vícekrát,
než v tom předchozím (protože `i` pokaždé vzroste o 1). Např. na začátku, kdy `i` = 0 a `j` = 0, podmínka `j <= i`
projde a vypíše se jeden znak. Pak se `j` zvýší na 1 a vnitřní cyklus končí (vykonal se jen jednou). V dalším průchodu
vnějšího se `i` rovná 1 a `j` znovu 0. Než bude `j` vyšší než `i`, vnitřní cyklus se provede dvakrát. Dá se tedy říct,
že vnitřní cyklus se vždy vykoná (`i` + 1)-krát. A protože `i` jde od 0 do `a` - 1,

V těle vnitřního cyklu se vždy vypíše jeden znak. Je zde nutné použít tu funkci jazyka, která řádek nezakončí zalomením
řádku (`\n`), protože znaky se mají vkládat na jeden řádek postupně za sebe, ne na každý řádek zvlášť. Po skončení
vnitřního cyklu je ale vždy nutné řádek poskládaný z těchto znaků opravdu zalomit, aby vznikl trojúhelník. K tomu je
použita stará známá funkce pro výpis, která na konec předaného textu přidává `\n`. V tomto případě ale žádný text
nedostane, a tak pouze řádek zalomí. Tímto postupem se vykreslí celý trojúhelník.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
