# Velikost písmene – řešení

Nejprve načítáme vstup do proměnné. V některých jazycích je nutné z něj vzít první znak.

Poté přichází čas na vyhodnocení, zda je znak malé či velké písmeno. Způsob zvolený v autorském řešení je využít ASCII
tabulku (zmíněnou
ve [studijních materiálech](/studijni-materialy/01-reprezentace-dat-v-pocitaci#text)).
V té jsou totiž velká písmena pod čísly 65 až 90. Znak tedy (je-li to v daném jazyce nutné) převedeme na celé číslo a v
podmínce se ptáme, zda se nachází mezi těmito dvěma. Tedy, zda je větší nebo rovno 65 a zároveň menší nebo rovno 90.
Totožný princip se využije u podmínky pro malá písmena, která jsou v ASCII jako 97 až 122.

Pro vypsání výsledku je vytvořena proměnná `output`, do které v těle podmínek zapisujeme příslušnou odpověď. Její obsah
se na konci vypíše. Samozřejmě by šlo vypisovat rovnou v těle podmínky, ale kód je takto o něco čistší, protože se
k výpisu dochází jen na jednom místě.

Pozn.: Jelikož víme, že na vstupu nepřijdou jiné znaky než písmena, je druhá podmínka v `else if` vlastně zbytečná a
stačilo by `else`.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
