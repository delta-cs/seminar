# Poklad v řece – řešení

Načte se počet měst a prázdný řádek. Do dvou polí se ve `for` cyklu načtou názvy a pozice měst. Pak se načte pozice
truhly.

Následně je nutné všechna města seřadit podle vzdálenosti od truhly. K tomu slouží funkce, která přijímá pole se jmény a
pozicemi a pozici truhly. Funkce využívá skutečnosti, že pole, které ve svém těle upraví, se změní také navenek, jak je
popsáno v [tomto studijním textu](/studijni-materialy/07-pole/05-pole-v-parametru-funkce). K seřazení prvků je využit
algoritmus zvaný bublinkové řazení (*bubble sort*), který prochází všechny prvky pole tak dlouho, dokud není seřazeno. V
každém průchodu porovnává sousední prvky a jsou-li v nesprávném pořadí, prohodí je. Detailnější popis naleznete kupř.
v [článku na Wikipedii](https://cs.wikipedia.org/wiki/Bublinkov%C3%A9_%C5%99azen%C3%AD).

Funkce v porovnání sousedních prvků vždy absolutní hodnotou vypočítá vzájemnou vzdálenost města a truhly. Pak následuje
podmínka, zda

- vzdálenost prvního města je menší než druhého

nebo

- vzdálenosti jsou stejné, ale první z měst je blíže po proudu (má menší pozici na řece).

Pokud podmínka platí, města se nemají prohodit, tudíž se použije `continue`. Když neplatí, města se prohodí: v jednom
poli se vymění jejich názvy a v druhém pozice.

Po skončení funkce jsou města v polích již správně seřazena a stačí je ve `for` cyklu vypsat.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
