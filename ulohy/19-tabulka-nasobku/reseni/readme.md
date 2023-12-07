# Tabulka násobků – řešení

Program obsahuje dvě pomocné funkce:

- `countDigits` pro výpočet počtu cifer čísla. To provádí opakovaným dělením 10 a počítadlem, kolikrát bylo děleno.
- `printHorizontalLine` pro výpis vodorovné čáry (ze znaků `-`). Funkce přijímá parametr, jak dlouhá má čára být.

Zpočátku se načtou rozměry tabulky a jsou předány funkci pro její vykreslení. Ta nejprve spočte celkovou šířku, jakou
bude tabulka mít. Začíná na 1 (tabulka má vždy vlevo jednu svislou čáru z `|`) a potom v cyklu pro každý sloupec tabulky
vypočítá jeho šířku. Každý sloupec je tak široký, jak je široké nejdelší číslo v něm. A to bude vždy to nejspodnější,
tedy: číslo sloupce (`col` – proměnná cyklu) krát číslo posledního řádku (tedy celkový počet řádků – `rows`). Využitím
pomocné funkce se vypočte počet cifer tohoto čísla a přičte se 3 (za 2 mezery kolem něj a 1 svislítko napravo za ním).

První řádek tabulky je vždy samotná vodorovná čára. Ta se vypíše pomocnou funkcí a její délka je právě čerstvě spočítaná
šířka celé tabulky. Poté už nastavá samotné vypisování řádků, samozřejmě v cyklu. Nejdřív je vždy vypsáno jedno
svislítko a pak začíná vnořený cyklus na sloupce.

V něm se spočte výsledek v aktuální buňce (číslo řádku krát sloupce). Přichází čas na zarovnání čísla doprava, a tak je
znovu potřeba vypočíst šířku celého sloupce (nejspodnějšího řádku), stejným způsobem jako v první části funkce. Od této
hodnoty je odečten počet cifer výsledku aktuální buňky a tolikrát se před číslem vypíše mezera (zarovná se). Pozor,
proměnná `pad` (angl. *odsazení*) v cyklu začíná na 0 a zvyšuje se až dokud je rovna (`<=`) počtu mezer, ve výsledku se
tedy vypíše o jednu mezeru navíc. To je žádoucí, protože alespoň jednou mezerou je číslo vždy od levé svislé čáry
odděleno. Po mezerách stačí vypsat samotný výsledek buňky a za ním mezeru a svislítko. Tím cyklus na sloupce končí.

Na konci vnějšího cyklu pak už dochází pouze k odřádkování a znovu vypsání vodorovné čáry o šířce celé tabulky.

---

- [řešení v C++](main.cpp)
- [řešení v C#](main.cs)
- [řešení v Javě](main.java)
- [řešení v JavaScriptu](main.js)
- [řešení v Pythonu](main.py)
