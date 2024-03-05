# Zídka – řešení

Jsou založeny dvě konstanty pro rozměry cihly. Na začátku se načte velikost zídky. Zároveň s tím se hned určí logická
proměnná, zda se má vykreslit cimbuří.

Následný `for` cyklus vykreslí v každém průchodu jednu řadu cihel (nikoli jen řádek znaků). Uvnitř se určují pomocné
logické proměnné

- zda jde o první řadu a
- zda jde o plnou (širší) řadu.

Používají se na různých místech během vykreslování.

Cyklus je rozdělen do několika fází. Nejprve se musí vykreslit případné odsazení řady zleva. To je buď nula nebo půlka
cihly anebo celá šířka cihly. Poté se vykreslí vrchní řádek znaků cihel. Jedině když se má vykreslit cimbuří a právě
jsme na první řadě, je čára přerušovaná. Ve všech ostatních průchodech je plná. Následuje výpis bočních hran cihel
pomocí vnořeného `for` cyklu, který má o 2 méně průchodů, než je výška cihly. Důvodem je, že výška cihly má v sobě i
horní a spodní řádek znaků. Znovu se vypočte a vykreslí odsazení. Pak stačí vypočíst počet těchto hran a následně je
všechny `for` cyklem vypsat. Mezi nimi se nachází mezery o šířce cihly zmenšený o 2 (šířka započítává i boční hrany).
Nakonec se vypíše spodní hrana cihel. Program využívá toho, že kromě úplně prvního řádku znaků mají všechny horizontální
hrany šířku jako celá zídka.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
