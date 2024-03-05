# Ptáci – řešení

Číselné konstanty označují různé prvky, které se mohou vyskytnout na drátě. Načte se délka drátu (a přičte se 1, protože
drát má o jednu pozici navíc) a založí se pole k jeho reprezentaci. Umístí se do něj ptáci načtení ze vstupu. Pak se
načte počet sloupů a k nim se založí dvě další pole – na hlasitosti a výšky tónu amplionu. Jsou stejně dlouhé jako
základní pole pro drát. Následně se načtou všechny sloupy. Každý se vloží jak do pole pro drát, tak na tentýž index ve
oněch dvou dalších. Ve výsledku tedy na indexech, kde je na drátu sloup, bude i v těchto dvou polích informace o
hlasitosti a výšce tónu. Na ostatních indexech zůstane výchozí hodnota, ale k těm se stejně nebude přistupovat.

Poté se postupně načtou zvuky z amplionů. Vždy se předají funkci, která přijímá pole prvků drátu a pozici, hlasitost a
výšku přehrávaného amplionu. Vstupní pole pozmění tak, aby odpovídalo stavu po přehrání zadaného zvuku. Je rozdělena na
levou a pravou stranu. U každé se vypočítá nejvzdálenější pozice, kterou zvuk ovlivní. Pak už se projdou všechny indexy
od ní směrem k amplionu. Nachází-li se na ní pták, je přemístěn na nový index – posunutý o výšku tónu v příslušném
směru – ovšem jen v případě, že je na tomto místě volno.

Po přehrání všech zvuků se drát klasickým průchodem a podle zadání vypíše.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
