# Transpozice – řešení

Zpočátku se načtou rozměry tabulky. V případě, že je jeden z nich menší než 1, tabulka neobsahuje žádné buňky a program
tudíž může skončit. Jinak se vytvoří 2D pole s těmito rozměry.

Následuje `for` cyklus pro index řádku (od 0 do výšky) a v něm zanořený další pro index sloupce (od 0 do šířky). V
každém průchodu vnitřního cyklu se na dané souřadnice tabulky zapíše znak ze vstupu. Důležité je zde pořadí souřadnic:
první index 2D pole je řádek, druhý je sloupec.

Nakonec zbývá tabulku transponovat – zaměnit sloupce za řádky. K tomu stačí opět dva zanořené `for` cykly, které
tentokrát tabulku prochází nejprve po sloupcích a v každém sloupci pak po řádku. Všimněte si, že to je opačné pořadí
indexů, než v jakém byly znaky do 2D pole zapisovány. Právě tím dojde k transpozici. Ve vnitřním cyklu se vypíše znak na
daných souřadnicích. Po jeho skončení se ve vnějším cyklu zalomí řádek.

Pozn.: Do 2D pole by šlo zapisovat i v opačném pořadí indexů – nejprve sloupce, v nich pak řádky. Pro transpozici je
důležité jen to, aby `for` cykly pro výpis byly v obráceném pořadí než ty pro načtení.
