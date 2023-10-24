# Denní rozvrh – řešení

Do dvou proměnných se uloží načtené hodiny a minuty. Potom se spočte celkový počet minut v tomto čase vynásobením hodin
60 a přičtením minut. Díky tomu stačí v podmínkách porovnávat jen jednu proměnnou namísto oddělených hodin a minut.

Proměnnou pro výstup (`activity`) nastavujeme zpočátku na `none`. Její obsah se změní jen v případě, že je čas na
nějakou konkrétní aktivitu. Jinak se na konci vypíše právě tato původní hodnota. Výhodou je, že `none` nastavujeme v
kódu na jediném místě.

Poté přichází podmínka pro časy od 21:00 do 6:00 (přes půlnoc). Tedy je-li součet minut zadaného času menší než součet
minut při 6:00 (360 min, v programu pro přehlednost rozepsáno jako 6 × 60) nebo větší rovno součtu minut při 21:00. V
těchto časech je v rozvrhu spánek a podle toho se nastavuje proměnná pro výstup.

Když není podmínka splněna, v té další se kontroluje, zda je čas menší než 7:00. Víme, že před 6:00 není, jelikož to by
zachytila první podmínka. Stejnou logikou jsou v podmínkách zaznamenány všechny časy a aktivity.

U těch aktivit, které začínají až po nějaké době od konce předchozí aktivity (tedy je mezi nimi prázdno), je vždy
přidána ještě jedna podmínka. Ta kontroluje, zda čas již přesáhl (je větší nebo roven) začátku této další aktivity.
Kdyby to totiž neplatilo, tak předchozí aktivita již skončila, ale nová ještě nezačla. V tuto chvíli by se tedy nic
nedělo – aktivita nemá být přepsána a zůstane `none`. Toto se kontroluje u `programming`, `lunch`, `dinner` a také u
posledního `reading`. U toho se ani neověřuje, že čas je menší než 21:00, jelikož to by bylo zachyceno už úplně první
podmínkou.

Na konci se vypíše výsledná aktivita.

PS: Možná se vám zdá, že rozepisovat všechny podmínky je nezáživná a strojová činnost. Vězte, že vyhnout se jí je možné
pomocí takzvaných cyklů a polí. Jak je použít si ukážeme v následujících měsících.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
