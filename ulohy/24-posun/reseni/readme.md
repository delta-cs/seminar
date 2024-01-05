# Posun – řešení

Načte se posun, počet čísel a prázdný řádek. Potom přichází využití následující skutečnosti: Když je posun roven délce
prvků, je to vlastně stejné, jako kdyby k žádnému posunu nedošlo, protože čísla skončí na stejných pozicích. Díky tomuto
také platí, že posun delší než počet prvků lze zkrátit opakovaným odečítáním délky. Např. při délce 3 a posunu 8 lze
délku dvakrát odečíst (8 - 3 - 3) a dostáváme posun 2. A posun 2 bude mít stejný výsledek jako původní posun 8. Tento
výpočet je proveden pomocí operátoru `%` – zbytku po dělení (modulo) – což je přesně, co opakované odečítání znamená.
Operátor v tomto případě sníží posun na nejnižší hodnotu, která bude mít stále stejný výsledek, ale bude menší než
délka. Operaci lze ovšem provést jen, když je délka větší než 0 (pro tu není `%` definován).

Pak se do pole načtou čísla ze vstupu. Vytvoří se ještě jedno pole, které bude obsahovat již posunuté hodnoty.
Následný `for` cyklus toto pole naplní: Vypočte nový index tak, že k indexu `i` vždy přičte posun a pak kontroluje, zda
tento nový index nepřesáhl hranice pole. Je-li menší než 0, je nutné přičíst počet čísel, aby se index přesunul na
konec. Naopak při přetečení na konci (index je větší nebo roven počtu čísel) se počet čísel odečítá a index se přesouvá
na začátek – to se stane při záporném posunu. Na tento nový index se pak zapíše číslo ze starého pole na aktuálním
indexu `i`.

Všechna čísla nově vytvořeného pole se nakonec `for` cyklem vypíší.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
