# Denní rozvrh II

Načte se počet činností v rozvrhu a prázdný řádek. Poté se vytvoří tři pole pro

- názvy činností,
- počáteční časy činností,
- koncové časy činností.

Tato pole spolu souvisí: budou stejně dlouhá a na jednom indexu jsou ve všech polích vždy uloženy údaje k jedné
činnosti. Např. třetí činnost má na indexu 2 v prvním poli uložen název, na stejném indexu v druhém poli počáteční čas a
na stejném indexu ve třetím poli koncový čas.

Následný `for` cyklus (běžící tolikrát, kolik je činností) tato pole naplní hodnotami ze vstupu. Pokaždé načte jméno a
pak dvakrát využije funkci `readTime`. Ta vždy načte ze dvou řádků hodiny a minuty a vrátí čas v minutách: hodiny × 60 +
minuty. Jedná se o stejný princip, jako v říjnovém [Denním rozvrhu](06-denni-rozvrh). Pomocí této funkce se k činnosti
načte její počáteční a koncový čas.

Po skončení cyklu se načte aktuální čás. Zbývá vypsat, která činnost tomuto času odpovídá. Nejdřív se založí logická
proměnná určující, zda byla taková činnost nalezena nebo ne. Poté začíná `for` cyklus, který prochází načtená pole.
Pokaždé načte počáteční a koncový čas z příslušných polí a ověřuje, zda se aktuální čas nachází mezi nimi. To platí ve
dvou případech:

1. Počáteční čas je menší nebo roven koncovému, tudíž tato činnost nepřesahuje přes půlnoc do dalšího dne. Má-li
   aktuální čas spadat do této činnosti, musí být větší nebo roven počátečnímu **a zároveň** menší nebo roven koncovému
   času.

2. Počáteční čas je větší než koncový, tudíž tato činnost přesahuje přes půlnoc do dalšího dne, např. začíná ve 22:00 a
   končí za 6 hodin ve 4:00. Má-li aktuální čas spadat do této činnosti, musí být větší nebo roven počátečnímu (tedy do
   půlnoci) **nebo** musí být menší nebo roven koncovému (od půlnoci).

Mezí těmito dvěma případy je pak operátor **nebo**, protože stačí, aby platil jeden z nich. Pokud podmínka projde,
označí se logická proměnná na `true` (činnost byla nalezena) a vypíše se název činnosti na aktuálním indexu `i`. Cyklus
pak může skončit pomocí `break`.

Nakonec se v případě, že by činnost nalezena nebyla (což je uloženo v logické proměnné), musí vypsat `none`.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
